"use client";

import Button from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import ModalClose from "@/components/ui/modal-close";
import ModalProvider from "@/components/ui/modal-provider";
import ModalTrigger from "@/components/ui/modal-trigger";
import useToast from "@/hooks/use-toast";

export default function ProjectListPage() {
    const toast = useToast();

    return (
        <div className="px-4 py-6 flex flex-col items-start gap-4">
            <h1 className="text-3xl font-bold">Projects</h1>
            <ModalProvider>
                <ModalTrigger>
                    <Button>Open modal</Button>
                </ModalTrigger>
                <Modal>
                    Hey!
                    <ModalClose>
                        <Button color="secondary">Close</Button>
                    </ModalClose>
                </Modal>
            </ModalProvider>
        </div>
    );
}
