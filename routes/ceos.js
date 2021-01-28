'use strict';

const express = require('express'),
    router = express.Router();

const ceosModel = require('../db');

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: "Apple CEO List",
            data: ceosModel,
        },
        partials: {
            body: "partials/ceo-list",
        }
    })
});

router.get('/:slug', (req, res) =>{
    const { slug } = req.params;
    const capitalizeName = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
    const nameCEO = capitalizeName(slug);
    res.render('template', {
        locals: {
            title: `CEO: ${nameCEO}`,
        },
        partials: {
            body: "partials/ceo-details",
        }
    });
});

module.exports = router;