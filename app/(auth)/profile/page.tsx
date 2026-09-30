'use client';

import { updateUser } from '@/app/lib/auth-client';
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from '@heroui/react';

export function Profile() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    alert('Form submitted successfully!');

    const resData = await updateUser({
      name: data.name,
    });
    console.log(resData);
  };

  return (
    <Form
      className="w-full max-w-96 h-screen flex items-center justify-center mx-auto"
      onSubmit={onSubmit}
    >
      <Fieldset>
        <Fieldset.Legend>Profile Settings</Fieldset.Legend>
        <Description>Update your profile information.</Description>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={value => {
              if (value.length < 3) {
                return 'Name must be at least 3 characters';
              }

              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="John Doe" />
            <FieldError />
          </TextField>
         
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit">Save changes</Button>
          <Button type="reset" variant="secondary">
            Cancel
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
  );
}
export default Profile;
