"use client";
import Button from "@/components/button";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

interface Inputs {
  name: string;
  email: string;
  message: string;
}
export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  function submitFormHandle() {
    const submitButton = document.getElementById("submitBtn") as HTMLInputElement | null;
    submitButton?.click();
  }
  const onSubmit: SubmitHandler<Inputs> = (data) => sendEmails(data);
  async function sendEmails(data: any) {
    toast.loading("Sending your message...");
    try {
      const req = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const res = await req.json();
      if (res.success) {
        const formElement = document.getElementById("contactForm") as HTMLFormElement | null;
        formElement?.reset();
        toast.dismiss();
        toast(() => (
          <div className="flex flex-col space-y-1">
            <p>We&apos;ve received your message</p>
            <p className="text-sm opacity-50">Getting back to you shortly...</p>
          </div>
        ));
      } else {
        toast.dismiss();
        toast(() => (
          <div className="flex flex-col space-y-1">
            <p>{res.message}</p>
            <p className="text-sm opacity-50">
              Send your email to the address below{" "}
            </p>
          </div>
        ));
      }
    } catch {
      toast.dismiss();
      toast(() => (
        <div className="flex flex-col space-y-1">
          <p>Seems like our server is down</p>
          <p className="text-sm opacity-50">
            Send your email to the address below{" "}
          </p>
        </div>
      ));
    }
  }
  return (
    <div className="mx-auto mt-24 max-w-screen-md">
      <h1 className="text-5xl font-light mb-6 px-10 max-sm:px-5">Contact us</h1>
      <form
        id="contactForm"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-1 px-10 max-sm:px-5"
      >
        <div className="flex sm:space-x-1 w-full max-sm:flex-col max-sm:space-y-1">
          <input
            type="text"
            placeholder="Name"
            {...register("name", {
              required: true,
            })}
            style={{
              backgroundColor: errors.name
                ? "#B91C1C30"
                : "rgb(7 139 203 / 0.2)",
            }}
            className="w-full px-6 py-3 text-xl font-light duration-500 delay-300 sm:rounded-tl-2xl max-sm:rounded-t-2xl rounded-md outline-none"
          />
          <input
            placeholder="Email"
            style={{
              backgroundColor: errors.email
                ? "#B91C1C30"
                : "rgb(7 139 203 / 0.2)",
            }}
            type="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className="w-full px-6 py-3 text-xl font-light duration-500 delay-300 rounded-md sm:rounded-tr-2xl outline-none"
          />
        </div>
        <textarea
          style={{
            backgroundColor: errors.message
              ? "#B91C1C30"
              : "rgb(7 139 203 / 0.2)",
          }}
          placeholder="Message"
          {...register("message", { required: true })}
          className="px-6 h-32 py-3 text-xl resize-none font-light duration-500 delay-300 rounded-b-2xl rounded-t-md outline-none"
        />
        <input type="submit" className="hidden" id="submitBtn"></input>
      </form>
      <div onClick={submitFormHandle} className="mt-3 ml-auto w-fit mr-10">
        <Button>Submit</Button>
      </div>
      <div className="mx-auto max-w-screen-md sm:px-10">
        <Link
          target="_blank"
          href={"mailto:info@karanassou.gr"}
          className="flex mt-16 border-t border-white/20 px-5 py-4 text-xl font-light tracking-wide"
        >
          <h3>Email</h3>
          <h3 className="ml-auto italic opacity-50 text-lg">
            info@karanassou.gr
          </h3>
        </Link>
        <Link
          href={"tel:+302373023053"}
          className="flex border-t border-white/20 px-5 py-4 text-xl font-light tracking-wide"
        >
          {" "}
          <h3>Phone number</h3>
          <h4 className="italic ml-auto opacity-50 text-lg">2373023053</h4>
        </Link>
        <Link
          target="_blank"
          href="https://maps.app.goo.gl/qpNcyn9SXbEmXXCk6"
          className="flex max-sm:flex-col border-y border-white/20 px-5 py-4 text-xl font-light tracking-wide"
        >
          <h3>Office</h3>
          <h4 className="italic ml-auto opacity-50 text-lg">
            Kiou 3, Nea Moudania 632 00
          </h4>
        </Link>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#081c2c",
            color: "white",
            borderRadius: "16px",
            padding: "20px 30px",
          },
          success: {
            style: {
              background: "rgb(7 139 203)",
            },
            icon: null,
          },
          error: {
            icon: null,
          },
        }}
      />
    </div>
  );
}
