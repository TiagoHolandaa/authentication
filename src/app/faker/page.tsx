'use client'

import { faker } from "@faker-js/faker";
import ClientButton from "./components/ClientButton";
import { Authenticaded } from "@/domain/Authenticated";

const FakerPage = () => {

  const generateFakeUser = (): Authenticaded => {
    return {
      email: faker.internet.email(),
      password: faker.internet.password()
    };
  };

  function handleFakerUser() {
    const fakerUser = generateFakeUser();
    console.log("teste", fakerUser);
  }

  return <ClientButton onClick={handleFakerUser}>Clique em mim</ClientButton>;
};

export default FakerPage;
