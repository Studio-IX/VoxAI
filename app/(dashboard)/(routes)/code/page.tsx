"use client";

import * as z from "zod";
import { Heading } from "@/components/heading";

import axios from "axios";
import OpenAI from "openai";
import Loader from "@/components/loader";
import ReactMarkdown from "react-markdown";

import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Empty } from "@/components/empty";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import { useProModal } from "@/hooks/use-pro-modal";
import { Sparkles } from "lucide-react";

const CodePage = () => {
  const proModal = useProModal();
  const router = useRouter();
  const [messages, setMessages] = useState<
    OpenAI.Chat.CreateChatCompletionRequestMessage[]
  >([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/code", {
        messages: newMessages,
      });
      setMessages((current) => [...current, userMessage, response.data]);

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
    <div className="flex flex-col md:justify-between justify-between h-[89vh] md:h-[85vh]">
      <div>
        <Heading
          title="Code Generation"
          description="Our most advanced code generation model."
        />
        <div className="md:px-6 md:bg-[#1A1924]">
          <div className="flex-1 overflow-y-auto md:pr-4 md:pl-4 md:pt-4 md:pb-4">
            <div className="space-y-4 mt-4">
              {isLoading && (
                <div className="p-8 rounded-lg w-full md:h-[600px] flex flex-col items-center justify-center">
                  <Loader />
                  <p className="text-white mt-10 font-dmSans font-normal text-center text-[18px]">
                    Generating code...
                  </p>
                </div>
              )}
              {messages.length === 0 && !isLoading && (
                <Empty label="No code generated" />
              )}
              <div className="flex flex-col gap-3 md:gap-y-6 overflow-y-auto mb-10">
                {messages.map((message) => (
                  <div
                    className={cn(
                      "flex",
                      message.role === "user"
                        ? "flex-row-reverse items-center"
                        : "flex-row items-start"
                    )}
                    key={message.content}
                  >
                    {message.role === "user" ? (
                      <div className="ml-3 md:ml-6">
                        <UserAvatar />
                      </div>
                    ) : (
                      <div className="mr-3 md:mr-6">
                        <BotAvatar />
                      </div>
                    )}
                    <div
                      key={message.content}
                      className={cn(
                        "px-3 md:px-4 py-2 md:py-4 w-fit flex items-center gap-x-8 rounded-[10px]",
                        message.role === "user"
                          ? "bg-[#242231] text-white "
                          : "text-white"
                      )}
                    >
                      <ReactMarkdown
                        components={{
                          pre: ({ node, ...props }) => (
                            <div className="overflow-auto w-full my-2 bg-[#242231] p-5 rounded-lg">
                              <pre {...props} />
                            </div>
                          ),
                          code: ({ node, ...props }) => (
                            <code
                              className="bg-[#6666D4] rounded-lg p-1"
                              {...props}
                            />
                          ),
                        }}
                        className="text-sm overflow-hidden leading-7"
                      >
                        {message.content || ""}
                      </ReactMarkdown>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row justify-between md:px-4 md:bg-[#1A1924] pb-5 md:pb-0">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg w-full flex flex-row justify-between md:p-4 md:px-6 focus-within:shadow-sm gap-2"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="m-0 p-0 px-3 md:px-5">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isLoading}
                      placeholder="Simple toggle button using react hooks."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-[10px] md:ml-2"
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

export default CodePage;
