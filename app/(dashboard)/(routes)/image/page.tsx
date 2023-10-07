"use client";

import * as z from "zod";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Download, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { amountOptions, formSchema, resolutionOptions } from "./constants";
import { Empty } from "@/components/empty";
import Loader from "@/components/loader";
import { useProModal } from "@/hooks/use-pro-modal";

const PhotoPage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [photos, setPhotos] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setPhotos([]);

      const response = await axios.post("/api/image", values);

      const urls = response.data.map((image: { url: string }) => image.url);

      setPhotos(urls);
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      } else {
        console.log(error);
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="flex flex-col justify-between h-[85vh]">
      <div>
        <Heading
          title="Image Generation"
          description="Turn your prompt into an image."
        />
        {isLoading && (
          <div className="p-8 rounded-lg w-full h-[600px] flex flex-col items-center justify-center">
            <Loader />
            <p className="text-white mt-10 font-dmSans font-normal text-center text-[18px]">Generating images</p>
          </div>
        )}
        {photos.length === 0 && !isLoading && (
          <Empty label="No images generated." />
        )}
        <div className="w-[88%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 pl-10 gap-7">
          {photos.map((src) => (
            <Card
              key={src}
              className="rounded-[15px] overflow-hidden border-none w-[310px] h-[305px] flex flex-col"
            >
              <div className="relative w-[310px] h-[305px]">
                <Image fill alt="Generated" src={src} />
              </div>
              <div className="absolute mt-[225px] ml-[230px]">
                <Button
                  onClick={() => window.open(src)}
                  variant="primary"
                  className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
                >
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-row justify-between px-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
              rounded-lg  
              w-full 
              flex
              flex-row
              justify-between
              p-4 
              px-3 
              md:px-6 
              focus-within:shadow-sm
              gap-2
            "
          >
            <div className="flex flex-row w-full bg-[#242231] items-center rounded-[10px] space-x-2 pr-2">
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl className="m-0 p-0 px-5">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="A picture of a horse in Swiss alps"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="w-[250px]">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {amountOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="resolution"
                render={({ field }) => (
                  <FormItem className="w-[250px]">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {resolutionOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-[60px] h-[60px] rounded-[10px] ml-2"
              disabled={isLoading}
            >
              <Sparkles fill="white" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PhotoPage;
