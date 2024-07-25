"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

import { CompanyFormProps } from "./CompanyForm.types";

import { UploadButton } from "@/utils/uploadthing";

export function CompanyForm(props: CompanyFormProps) {
    const { company } = props;
    const router = useRouter();
    const [photoUploaded, setPhotoUploaded] = useState(false);

  return (
    <div>CompanyForm</div>
  )
}
