'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@repo/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@repo/ui/form';
import { Input } from '@repo/ui/input';
import { Label } from '@repo/ui/label';

import LoaderButton from '@/components/LoaderButton';
import FormResponse from '@/features/auth/components/FormResponse';
import { useUpdateUserForm } from '@/features/user/hooks/useUpdateUserForm';

const UpdateUserForm = () => {
  const { form, onSubmit, isPending, error, user } = useUpdateUserForm();

  return (
    <Card className="w-full">
      <CardHeader className="mb-6">
        <CardTitle>Profile</CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="w-full space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Email</Label>
                <Input placeholder="Email" value={user?.email!} disabled />
              </div>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          {error && <FormResponse variant="destructive" description={error} title="Error" />}
          <CardFooter className="justify-end pt-3">
            <LoaderButton type="submit" isPending={isPending}>
              Save Changes
            </LoaderButton>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default UpdateUserForm;
