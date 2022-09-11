import React, { useMemo, useState } from 'react';
import Button from '../../components/button/Button';
import FormRow from '../../components/common/FormRow';
import FormGroup from '../../components/common/FormGroup';
import Label from '../../components/label/Label';
import Input from '../../components/input/Input';
import { useForm } from 'react-hook-form';
import { Dropdown } from '../../components/dropdown';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from 'quill-image-uploader';
import axios from 'axios';
import { imgbbAPI } from '../../config/config';
Quill.register('modules/imageUploader', ImageUploader);
const categoriesData = ['blox fruit', 'all star tower defense'];
const PostAddNewAdmin = () => {
  const [content, setContent] = useState('');
  const { handleSubmit, control, setValue, reset, watch } = useForm();
  const getDropdownLabel = (name, defaultValue = '') => {
    const value = watch(name) || defaultValue;
    return value;
  };
  const handleAddNewCampaign = async (values) => {
    console.log(values);
  };
  const handleSelectDropdownOption = (name, value) => {
    setValue(name, value);
  };
  const modules = useMemo(
    () => ({
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote'],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['link', 'image'],
      ],
      imageUploader: {
        // imgbbAPI
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append('image', file);
          const response = await axios({
            method: 'post',
            url: imgbbAPI,
            data: bodyFormData,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          return response.data.data.url;
        },
      },
    }),
    [],
  );
  return (
    <div className="rounded-xl py-[50px]">
      <div className="text-center">
        <h1 className="py-4 px-12 text-white rounded-xl font-bold text-[25px] inline-block mb-10 bg-primary ">
          Start post
        </h1>
        <form onSubmit={handleSubmit(handleAddNewCampaign)}>
          <FormRow>
            <FormGroup>
              <Label>Post Title *</Label>
              <Input
                control={control}
                name="title"
                placeholder="Write a title"
                className="placeholder:text-primary"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Select a category *</Label>
              <Dropdown>
                <Dropdown.Select
                  placeholder={getDropdownLabel('category', 'Select category')}
                ></Dropdown.Select>
                <Dropdown.List>
                  {categoriesData.map((category) => (
                    <Dropdown.Option
                      key={category}
                      onClick={() =>
                        handleSelectDropdownOption('category', category)
                      }
                    >
                      <span className="capitalize">{category}</span>
                    </Dropdown.Option>
                  ))}
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label>Story *</Label>
            <ReactQuill
              placeholder="Write your story......"
              modules={modules}
              theme="snow"
              value={content}
              onChange={setContent}
            />
          </FormGroup>
          <FormRow>
            <FormGroup>
              <Label>Script</Label>
              <Input
                control={control}
                name="prefilled"
                placeholder="Script"
                className="placeholder:text-primary"
              ></Input>
              <p className="text-sm text-left text-primary font-medium">
                loadstring(game:HttpGet"https://raw.githubusercontent.com/xDepressionx/Free-Script/main/AllScript.lua")()
              </p>
            </FormGroup>
            <FormGroup>
              <Label>Video</Label>
              <Input
                control={control}
                name="video"
                placeholder="Video"
                className="placeholder:text-primary"
              ></Input>
              <p className="text-sm text-left text-primary font-medium">
                Place Youtube or Vimeo Video URL
              </p>
            </FormGroup>
          </FormRow>
          <div className="mt-5 text-center">
            <Button
              className="px-10 mx-auto text-white bg-primary"
              type="submit"
            >
              Submit new campaign{' '}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default PostAddNewAdmin;
