import DeleteProjectForm from "./delete-project-form";
import EditProjectForm from "./edit-project-form"; 
import Modal from "./ui/modal";
import ModalClose from "./ui/modal-close";
import ModalProvider from "./ui/modal-provider";
import ModalTrigger from "./ui/modal-trigger";

export default function ProjectOption({ publicId, name }) {
    return (
        <Modal className="p-0 top-1/2 -translate-y-1/2">
            <div className="p-0 flex flex-col items-center">   
                <ModalProvider>
                    <ModalTrigger className="w-full">
                        <button className="w-full py-2">Edit</button>
                    </ModalTrigger>
                    <EditProjectForm publicId={publicId} name={name} />
                </ModalProvider>
                <div className="w-full h-[0.0625rem] bg-zinc-800" />
                <ModalProvider>
                    <ModalTrigger className="w-full">
                        <button className="w-full py-2 text-red-500">Delete</button>
                    </ModalTrigger>
                    <DeleteProjectForm publicId={publicId} />
                </ModalProvider>
                <div className="w-full h-[0.0625rem] bg-zinc-800" />
                <ModalClose className="w-full">
                    <button className="w-full py-2">Cancel</button>
                </ModalClose>
            </div>
        </Modal>
    );
}
