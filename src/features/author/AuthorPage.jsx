import React from "react";
import {Container} from "../../common/Container";
import {Header} from "../../common/Header";
import {Section} from "../../common/Section";

export const AuthorPage = () => {
    return (
        <Container>
            <Header title="About the author"/>
            <Section
                title="Aneta Szynal"
                body={
                    <>
                        <p>
                            Smiling, communicative and full of respect for others. <br/>
                            Since 2019, she has been boldly moving towards programming. I'm making up a little
                            experience{" "}
                            <b>with great commitment and willingness to learn.</b> In free time
                            I love reading books and solving puzzles.
                        </p>
                    </>
                }
            />
        </Container>
    );
};
