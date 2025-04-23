import React, { FormEvent, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { router } from "@inertiajs/react";
import { toast } from "sonner";
interface CreateGroupModalProps {
    open: boolean;
    onClose: () => void;
}
const CreateGroupModal = ({ open, onClose }: CreateGroupModalProps) => {
    const [name, setName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const { mutate, isPending } = useCreateGroup();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        router.post(
            "/groups/create",
            { name },
            {
                onSuccess: () => {
                    toast.success("Group created");
                    setName("");
                    onClose();
                },
                onError: () => {
                    toast.error("Something went wrong");
                },
                onFinish: () => setIsSubmitting(false),
            }
        );
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={isSubmitting}
                            required
                            autoFocus
                            minLength={3}
                            placeholder="Group name e.g. 'DTSM', 'AWL'"
                        />
                        <div className="flex justify-end">
                            <Button disabled={isSubmitting}>Create</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default CreateGroupModal;
