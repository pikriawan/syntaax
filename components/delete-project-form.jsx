import Button from "./ui/button";
import Modal from "./ui/modal";
import ModalClose from "./ui/modal-close";
import SubmitButton from "./ui/submit-button";
import { deleteProject } from "@/actions/project";

export default function DeleteProjectForm({ publicId }) {
    return (
        <Modal>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Delete Project</h2>
                <p>Are you sure you want to delete this project?</p>
                <form action={deleteProject}>
                    <input type="hidden" name="public_id" value={publicId} />
                    <div className="flex gap-3">
                        <ModalClose className="grow">
                            <Button className="w-full" type="button" color="secondary">Cancel</Button>
                        </ModalClose>
                        <SubmitButton className="grow" color="danger">Yes</SubmitButton>
                    </div>
                </form>
            </div>
        </Modal>
    );
}
