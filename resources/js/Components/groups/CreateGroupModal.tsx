import React, { FormEvent, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { router, useForm } from "@inertiajs/react";
import { toast } from "sonner";
import { useFormHandler } from "@/util/formHandler";
interface CreateGroupModalProps {
    open: boolean;
    onClose: () => void;
}
const CreateGroupModal = ({ open, onClose }: CreateGroupModalProps) => {
    const form = useForm({
        name: "",
    });
    const {submit} = useFormHandler(form);


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    
        submit('POST', 'groups/create');
    };

    return (
        <>
            <Dialog open={open} onOpenChange={onClose}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create a group</DialogTitle>
                    </DialogHeader>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <Input
                            value={form.data.name}
                            disabled={form.processing}
                            required
                            autoFocus
                            onChange={(e) => form.setData("name", e.target.value)}
                            minLength={3}
                            placeholder="Group name e.g. 'DTSM', 'AWL'"
                        />
                        <div className="flex justify-end">
                            <Button disabled={form.processing}>Create</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default CreateGroupModal;
