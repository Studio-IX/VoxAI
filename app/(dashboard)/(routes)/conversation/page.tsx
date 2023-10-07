"use client";

import * as z from "zod";
import { Heading } from "@/components/heading";

import axios from "axios";
import OpenAI from "openai";

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
import Loader from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import { useProModal } from "@/hooks/use-pro-modal";
import Image from "next/image";

const ConversationPage = () => {
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

      const response = await axios.post("/api/conversation", {
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
    <div className="flex flex-col justify-between h-[85vh]">
      <div>
        <Heading
          title="Conversation"
          description="Our most advanced conversation model."
        />
        <div className="px-4 lg:px-8">
          <div className="flex-1 overflow-y-auto pr-4 pl-4 pt-4 pb-4">
            <div className="space-y-4 mt-4">
              {isLoading && (
                <div className="p-8 rounded-lg w-full h-[600px] flex flex-col items-center justify-center">
                  <Loader />
                  <p className="text-white mt-10 font-dmSans font-normal text-center text-[18px]">
                    Thinking...
                  </p>
                </div>
              )}
              {messages.length === 0 && !isLoading && (
                <Empty label="No conversation started" />
              )}

              <div className="flex flex-col gap-y-6 overflow-y-auto">
                {messages.map((message) => (
                  <div
                    className={cn(
                      "flex",
                      message.role === "user"
                        ? "flex-row-reverse items-center"
                        : "flex-row items-center"
                    )}
                    key={message.content}
                  >
                    {message.role === "user" ? (
                      <div className="ml-6">
                        <UserAvatar />
                      </div>
                    ) : (
                      <div className="mr-6">
                        <BotAvatar />
                      </div>
                    )}
                    <div
                      className={cn(
                        "px-4 py-4 w-fit flex items-center gap-x-8 rounded-[10px]",
                        message.role === "user"
                          ? "bg-[#242231]"
                          : "bg-[#6666D4]"
                      )}
                    >
                      <p
                        className={cn(
                          "text-[18px] font-dmSans font-normal",
                          message.role === "user" ? "text-white" : "text-white"
                        )}
                      >
                        {message.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row justify-between px-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg w-full flex flex-row justify-between p-4 px-3 md:px-6 focus-within:shadow-sm gap-2"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="m-0 p-0 px-5">
                    <Input
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isLoading}
                      placeholder="How do I calculate the radius of a circle?"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className="w-[60px] h-[60px] rounded-[10px] ml-2"
              disabled={isLoading}
            >
              <Image width={24} height={24} src="/send.svg" alt="Send icon" />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ConversationPage;
