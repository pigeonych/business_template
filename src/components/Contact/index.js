import React from "react";
import {
    FormButton,
    FormInput,
    FormLabel,
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    Text,
} from "./ContactElements";

const Contact = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to="/">Fortex</Icon>
                <FormContent>
                    <Form action="telegram.php" method="POST">
                        <FormH1>Contact Us</FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" name="email" required />
                        <FormLabel htmlFor="for">Name</FormLabel>
                        <FormInput type="text" name="name" required />
                        <FormLabel htmlFor="for">Surname</FormLabel>
                        <FormInput type="text" name="surname" required />
                        <FormLabel htmlFor="for">Tel.</FormLabel>
                        <FormInput type="tel" name="tel" />
                        <FormLabel htmlFor="for">Message</FormLabel>
                        <FormInput type="text" name="message" />
                        <FormButton type="submit">Submit</FormButton>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptas, eveniet.
                        </Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    );
};

export default Contact;
