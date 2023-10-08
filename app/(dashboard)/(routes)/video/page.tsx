"use client";

import * as z from "zod";
import { Heading } from "@/components/heading";

import axios from "axios";

import { Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Empty } from "@/components/empty";
import Loader from "@/components/loader";
import { useProModal } from "@/hooks/use-pro-modal";

const VideoPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [video, setVideo] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setVideo(undefined);

      const response = await axios.post("/api/video", values);

      setVideo(response.data[0]);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col justify-between h-[85vh]">
      <div>
        <Heading
          title="Video Generation"
          description="Turn your prompt into video."
        />

        {isLoading && (
          <div className="p-8 rounded-lg w-full h-[600px] flex flex-col items-center justify-center">
            <Loader />
            <p className="text-white mt-10 font-dmSans font-normal text-center text-[18px]">
              Generating video...
            </p>
          </div>
        )}
        {!video && !isLoading && <Empty label="No video generated" />}
        <div className="md:px-10 pb-10 md:pb-0">
          {video && (
            <video
              controls
              className="w-full aspect-video h-[640px] mt-8 rounded-lg bg-black"
            >
              <source src={video} />
            </video>
          )}
        </div>
      </div>
      <div className="w-full flex flex-row justify-between md:px-4">
        <div className="w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg flex flex-row justify-between w-full md:p-4 md:px-6 focus-within:shadow-sm gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl className="m-0 p-0 px-3 md:px-5">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Clown fish swimming around a coral reef"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-[10px] md:ml-2"
                disabled={isLoading}
              >
                <Sparkles fill="white" />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
