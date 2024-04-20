"use client";

import FormPost from "@/components/FormPost";
import { FormInputPost } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";

const Post: React.FC = () => {
  const router = useRouter();

  const API_URL =
    "http://localhost:8000/v1/users" || process.env.NEXT_PUBLIC_API_URL;

  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    mutate(data);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      return axios.post(API_URL, newPost);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      // Invalidate and refetch
      router.push("/");
      router.refresh();
    },
  });

  return (
    <div className="flex flex-row justify-center items-center">
      <div>
        <div>
          <button className="btn" onClick={() => router.back()}>
            Back
          </button>
          <h1 className="text-2xl my-4 font-bold text-center">Add new Post</h1>
          <FormPost
            isPending={isPending}
            submit={handleCreatePost}
            isEditing={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
