import React from 'react';
import FormRow from '../../components/common/FormRow';
import Label from '../../components/label/Label';
import Input from '../../components/input/Input';
import FormGroup from '../../components/common/FormGroup';
import { useForm } from 'react-hook-form';
import Button from '../../components/button/Button';
import axios from 'axios';
import { apiURL } from '../../config/config';
import { toast } from 'react-toastify';

const CategoryAddNewAdmin = () => {
  const { handleSubmit, control, isSubmitting, reset } = useForm();
  const resetValues = () => {
    reset({});
  };
  const handleAddNewCategory = async (values) => {
    try {
      await axios.post(`${apiURL}/categories`, {
        ...values,
      });
      toast.success('Add new category successfully');
      resetValues();
    } catch (err) {
      toast.error('Can not add new category');
    }
    resetValues();
  };
  return (
    <div className="w-[60%] mt-10 mx-auto">
      <div className="text-center">
        <h1 className="py-4 px-12 text-white rounded-xl font-bold text-[20px] inline-block mb-5 bg-primary ">
          Start post
        </h1>
        <form
          onSubmit={handleSubmit(handleAddNewCategory)}
          autoComplete="off
      "
        >
          <FormRow>
            <FormGroup>
              <Label>Name</Label>
              <Input
                control={control}
                name="name"
                placeholder="Enter your category name"
                required
                className="placeholder:text-primary"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Slug</Label>
              <Input
                control={control}
                name="slug"
                placeholder="Enter your slug"
                className="placeholder:text-primary"
              ></Input>
            </FormGroup>
          </FormRow>
          <Button
            kind="primary"
            className="mx-auto w-[200px] mt-3"
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            Add new category
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CategoryAddNewAdmin;
