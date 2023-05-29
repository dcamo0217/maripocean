import React, { useRef } from "react";
import styles from "./../../../styles/home/Register.module.css";
import { useForm } from "react-hook-form";

const Register = () => {
  const { handleSubmit, register } = useForm();
  const nombreInputRef = useRef(null);
  const correoInputRef = useRef(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `https://api.convertkit.com/v3/forms/5193729/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            api_key: "7aO03ABUI3hH26X4ALyZXQ",
            email: data.correo,
            fields: {
              first_name: data.nombre,
            },
          }),
        }
      );
      if (response.ok) {
        nombreInputRef.current.value = "";
        correoInputRef.current.value = "";
        alert("¡Formulario enviado con éxito!");
      } else {
        alert("Error al enviar el formulario.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerContentDiv}>
        <h2 className={styles.registerTitle}>
          Stay up to date for new camp dates and great tips to improve your
          nautical skills
        </h2>
        <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.registerForm}>
            <input
              className={styles.registerInput}
              type="text"
              placeholder="Enter name"
              {...register("nombre", { required: true })}
              ref={nombreInputRef}
              id="name"
            />

            <input
              className={styles.registerInput}
              type="text"
              placeholder="Enter e-mail address"
              {...register("correo", { required: true })}
              ref={correoInputRef}
              id="email"
            />
          </div>
          <button className={styles.bttnRegister} type="submit">
            Sign up now
          </button>
        </form>

        {/* <Button textButton="Sign up now" typeBtn="primary" url="" /> */}
      </div>
    </div>
  );
};

export default Register;
