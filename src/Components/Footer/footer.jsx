import React from "react";
import { Box, Grid } from "@chakra-ui/core";
import { GoMarkGithub } from "react-icons/go";

const Footer = () => {
    return (
        <>
        <Grid
            borderTop="dotted"
            className="header"
            m={4}
            p={4}
        >
            <Box d="flex" alignItems="center" justifyContent="center">
            Built with React.js by&nbsp;
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/vskemp"
            > Veronica Kemp {"  "}
                <Box as={GoMarkGithub} />
            </a>
            </Box>
        </Grid>
        </>
    );
    };
export default Footer;
