import React from "react";
import {Container} from "../../common/Container";
import {Header} from "../../common/Header";
import {Section} from "../../common/Section";

export const AuthorPage = () => {
    return (
        <Container>
            <Header title="O autorze"/>
            <Section
                title="Aneta Szynal"
                body={
                    <>
                        <p>
                            Uśmiechnięta, komunikatywna oraz pełna szacunku dla innych. <br/>
                            Od 2019 roku śmiało krocząca ku programowaniu. Niewielkie
                            doświadczenie nadrabiam{" "}
                            <b>wielkim zaangażowaniem i chęcią nauki.</b> W wolnym czasie
                            uwielbiam czytać książki oraz rozwiązywać łamigłówki.
                        </p>
                    </>
                }
            />
        </Container>
    );
};
