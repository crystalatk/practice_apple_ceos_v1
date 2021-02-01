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
    const executive = ceosModel.find(executive => executive.slug === slug);
    if (executive) {
        res.render('template', {
            locals: {
                title: `CEO: ${executive.name}`,
                executive,
            },
            partials: {
                body: "partials/ceo-details",
            }
        });
    } else {
        res.status(404).send(`No CEO found that matches slug, ${slug}`);
    }
});

module.exports = router;