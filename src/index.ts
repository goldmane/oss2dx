#!/usr/bin/env node

import dotenv from 'dotenv';
dotenv.config();

// get labels based on language
const LABELS = {
    "MISSING_CONFIG_SECTION": `Missing config section 'oss2dx' in config file: ${process.env.npm_package_json}`
};

// validate the config
const packageJson = require(process.env.npm_package_json as string);
if (!packageJson.oss2dx) {
    throw new Error(LABELS.MISSING_CONFIG_SECTION)
}