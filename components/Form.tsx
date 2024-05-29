'use client'

import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';

type Inputs = {
  example: string,
  exampleRequired: string,
};

export default function Form() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type='email' />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </form>
  );
}