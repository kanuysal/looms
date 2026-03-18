'use client'
import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from '../error-msg';

type FormData = {
  name: string;
  subject: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  subject: yup.string().required().label("subject"),
  message: yup.string().required().label("Message"),
});

// prop type 
type IProps = {
  btnCls?:string;
}
import { useTranslation } from "@/provider/LanguageProvider";

export default function ContactForm({btnCls=''}:IProps) {
  const { t } = useTranslation();
  const {register,handleSubmit,reset,formState: { errors }} = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data:FormData) => {
    alert(JSON.stringify(data))
    reset()
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="cn-contactform-input mb-25">
        <label>{t('name')}</label>
        <input id='name' {...register("name")} type="text" placeholder={t('placeholder_name')} />
        <ErrorMsg msg={errors.name?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>{t('subject')}</label>
        <input id='subject' {...register("subject")} type="text" placeholder={t('placeholder_email')} />
        <ErrorMsg msg={errors.subject?.message!} />
      </div>
      <div className="cn-contactform-input mb-25">
        <label>{t('message')}</label>
        <textarea id='message' {...register("message")} placeholder={t('placeholder_message')}></textarea>
        <ErrorMsg msg={errors.message?.message!} />
      </div>
      <div className="cn-contactform-btn">
        <button className={`tp-btn-black-md ${btnCls} w-100`} type="submit">
          {t('send_message')}
        </button>
      </div>
    </form>
  );
}
