"use client";

import { FormInputPost } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
  initialValue?: FormInputPost;
  isPending: boolean;
}

const FormPost: FC<FormPostProps> = ({
  submit,
  isEditing,
  initialValue,
  isPending,
}) => {
  const { register, handleSubmit } = useForm<FormInputPost>({
    defaultValues: initialValue,
  });

  // fetch list tags
  //   const { data: dataTags, isLoading: isLoadingTags } = useQuery<Tag[]>({
  //     queryKey: ["tags"],
  //     queryFn: async () => {
  //       const response = await axios.get("/api/tags");
  //       return response.data;
  //     },
  //   });

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10 "
    >
      <input
        type="text"
        placeholder="Post title.."
        className="input input-bordered w-full max-w-lg"
        {...register("name", { required: true })}
      />

      {/* 
      {isLoadingTags ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        <select
          className="select select-bordered w-full max-w-lg"
          {...register("tagId", { required: true })}
          defaultValue={""}
        >
          <option disabled value="">
            Select tags
          </option>
          {dataTags?.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      )} */}

      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isPending && (
          <div>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
          </div>
        )}
        {isEditing
          ? isPending
            ? "Updating"
            : "Update"
          : isPending
          ? "Creating"
          : "Create"}
      </button>
    </form>
  );
};

export default FormPost;
