import { HandIcon, Pencil1Icon, Pencil2Icon, RocketIcon } from "@radix-ui/react-icons";
import { Handshake } from "lucide-react";

export const features = [
    {
        title: "Speed and Efficiency",
        description: "Experience lightning-fast performance and dependable service tailored to your needs. We're here to ensure seamless operation, always ready to assist with any challenges.",
        icon: <RocketIcon className="w-6 h-6" />,
    },
    {
        title: "Fully Customizable",
        description: "Our platform offers extensive customization options, allowing you to adjust layouts, color schemes, and more, ensuring it aligns perfectly with your brand's identity.",
        icon: <Pencil2Icon className="w-6 h-6" />,
    },
    {
        title: "Intuitive and User-Friendly",
        description: "Navigate with ease through our thoughtfully designed interface, created to simplify your workflow and enhance the user experience.",
        icon: <Handshake className="w-6 h-6" />,
    },
];
