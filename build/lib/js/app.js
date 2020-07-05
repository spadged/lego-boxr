const stores = { 
    template: `
        <div class="grid grid-cols-2 gap-4">
            <router-link 
                :to="{path: '/store/' + store.id, params: store}" 
                v-for="store in stores" 
                class="bg-white block border-4 bg-teal-500 border-teal-500 rounded-sm">
                <h5 class="p-3 text-white">{{ store.label }}</h5>
                <div v-if="store.containers" class="grid gap-1">
                    <div 
                        v-for="container in store.containers" 
                        class="bg-white p-4" 
                        v-bind:style="{ gridArea: container.area }">
                        <div v-for="item in container.items" class="">
                            <img v-bind:src="'/lib/img/parts/' + item.no + '.png'" />
                            <span class="hidden">
                            {{ item.label }} <br/> <small v-for="icolour in item.colour">{{ icolour }}, </small></span>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>`,
    data: function()
    {
        return {
            stores: [
                {
                    "label":"RAACO 1",
                    "type":"Drawers",
                    "id": "4b954ea1-8974-44c7-a1ac-291074710c88",
                    "serial": "RAA126762",
                    "grid": {
                        "rows": 10,
                        "columns":15
                    },
                    "containers": [
                        {
                            "area": "1 / 1 / 2 / 4",
                            "items": [
                                {
                                    "id": "",
                                    "no":"3623",
                                    "label": "Plate 1 x 3",
                                    "colour": ["Light Grey", "Dark Grey"]
                                }
                            ]
                        },
                        {
                            "area": "1 / 4 / 2 / 7",
                            "items": [
                                {
                                    "id": "",
                                    "no":"3623",
                                    "label": "Plate 1 x 3",
                                    "colour": ["Yellow"]
                                }
                            ]
                        },
                        {
                            "area": "1 / 7 / 2 / 10",
                            "items": [
                                {
                                    "id": "",
                                    "no":"3623",
                                    "label": "Plate 1 x 3",
                                    "colour": ["Red"]
                                }
                            ]
                        },
                        {
                            "area": "1 / 10 / 2 / 13",
                            "items": [
                                {
                                    "id": "",
                                    "no":"3623",
                                    "label": "Plate 1 x 3",
                                    "colour": ["Black"]
                                }
                            ]
                        },
                        {
                            "area": "1 / 13 / 2 / 16",
                            "items": [
                                {
                                    "id": "",
                                    "no":"3623",
                                    "label": "Plate 1 x 3",
                                    "colour": ["White"]
                                }
                            ]
                        },
                        {
                            "area": "2 / 1 / 3 / 4",
                            "items": [
                                {
                                    "id": "",
                                    "no":"3623",
                                    "label": "Plate 1 x 3",
                                    "colour": ["Blue", "Purple"]
                                }
                            ]
                        },
                        {
                            "area": "2 / 4 / 3 / 7",
                            "items": [
                                {
                                    "id": "",
                                    "no":"3623",
                                    "label": "Plate 1 x 3",
                                    "colour": ["Green", "Brown"]
                                }
                            ]
                        },
                        {
                            "area": "2 / 7 / 3 / 10",
                            "items": [
                                {
                                    "id": "",
                                    "no":"3022",
                                    "label": "Plate 2 x 2",
                                    "colour": ["Blue", "Light Blue", "Pink"]
                                }
                            ]
                        },
                        {
                            "area": "2 / 10 / 3 / 13",
                            "items": [
                                {
                                    "id": "",
                                    "no":"3022",
                                    "label": "Plate 2 x 2",
                                    "colour": ["Dark Grey"]
                                }
                            ]
                        },
                        {
                            "area": "2 / 13 / 3 / 16",
                            "items": [
                                {
                                    "id": "",
                                    "no":"3022",
                                    "label": "Plate 2 x 2",
                                    "colour": ["Light Grey"]
                                }
                            ]
                        },
                        {
                            "area": "3 / 1 / 4 / 4",
                            "items": [
                                {
                                    "id": "",
                                    "no":"3022",
                                    "label": "Plate 2 x 2",
                                    "colour": ["Black"]
                                }
                            ]
                        },
                        {
                            "area": "3 / 4 / 4 / 7",
                            "items": [
                                {
                                    "id": "",
                                    "no":"3022",
                                    "label": "Plate 2 x 2",
                                    "colour": ["Green", "Brown", "Tan"]
                                }
                            ]
                        },
                        {
                            "area": "3 / 7 / 4 / 10",
                            "items": [
                                {
                                    "id": "",
                                    "no":"3022",
                                    "label": "Plate 2 x 2",
                                    "colour": ["Red", "Orange"]
                                }
                            ]
                        },
                        {
                            "area": "3 / 10 / 4 / 13",
                            "items": [
                                {
                                    "id": "",
                                    "no":"3022",
                                    "label": "Plate 2 x 2",
                                    "colour": ["White", "Sand"]
                                }
                            ]
                        },
                        {
                            "area": "3 / 13 / 4 / 16",
                            "items": [
                                {
                                    "id": "",
                                    "no":"3022",
                                    "label": "Plate 2 x 2",
                                    "colour": ["Yellow"]
                                }
                            ]
                        },
                        {
                            "area": "4 / 1 / 5 / 4",
                            "items": [
                                {
                                    "id": "",
                                    "no":"30414",
                                    "label": "Brick, Modified 1 x 4 with 4 Studs on 1 Side",
                                    "colour": ["Black", "White", "Red", "Grey", "Tan"]
                                }
                            ]
                        },
                        {
                            "area": "4 / 4 / 5 / 7",
                            "items": [
                                {
                                    "id": "",
                                    "no":"2436",
                                    "label": "Bracket 1 x 2 - 1 x 4",
                                    "colour": ["Blue","White","Black","Red", "Yellow", "Green"]
                                }
                            ]
                        },
                        {
                            "area": "4 / 7 / 5 / 10",
                            "items": [
                                {
                                    "id": "",
                                    "no":"2436",
                                    "label": "Bracket 2 x 2 - 1 x 2 Centered",
                                    "colour": ["Dark Grey"]
                                },
                                {
                                    "id": "",
                                    "no":"99206",
                                    "label": "Plate, Modified 2 x 2 x 2/3 with 2 Studs on Side",
                                    "colour": ["Red", "White", "Blue", "Black", "Light Grey"]
                                },
                                {
                                    "id": "",
                                    "no":"93274",
                                    "label": "Bracket 1 x 2 - 2 x 4",
                                    "colour": ["Red", "Dark Grey", "Black", "Light Grey"]
                                },
                                {
                                    "id": "",
                                    "no":"22885",
                                    "label": "Brick, Modified 1 x 2 x 1 2/3 with Studs on 1 Side",
                                    "colour": ["Red", "Light Grey"]
                                },
                                {
                                    "id": "",
                                    "no":"87609",
                                    "label": "Plate, Modified 2 x 6 x 2/3 with 4 Studs on Side",
                                    "colour": ["Orange", "Red"]
                                }
                            ]
                        },
                        {
                            "area": "4 / 10 / 5 / 13",
                            "items": [
                                
                            ]
                        },
                        {
                            "area": "4 / 13 / 5 / 16",
                            "items": []
                        },
                        {
                            "area": "5 / 1 / 6 / 4",
                            "items": []
                        },
                        {
                            "area": "5 / 4 / 6 / 7",
                            "items": []
                        },
                        {
                            "area": "5 / 7 / 6 / 10",
                            "items": []
                        },
                        {
                            "area": "5 / 10 / 6 / 13",
                            "items": []
                        },
                        { 
                            "area": "5 / 13 / 6 / 16",
                            "items": []
                        },
                        {
                            "area": "6 / 1 / 7 / 4",
                            "items": []
                        },
                        {
                            "area": "6 / 4 / 7 / 7",
                            "items": []
                        },
                        {
                            "area": "6 / 7 / 7 / 10",
                            "items": []
                        },
                        {
                            "area": "6 / 10 / 7 / 13",
                            "items": []
                        },
                        {
                            "area": "6 / 13 / 7 / 16",
                            "items": []
                        },
                        {
                            "area": "7 / 1 / 8 / 4",
                            "items": []
                        },
                        {
                            "area": "7 / 4 / 8 / 7",
                            "items": []
                        },
                        {
                            "area": "7 / 7 / 8 / 10",
                            "items": []
                        },
                        {
                            "area": "7 / 10 / 8 / 13",
                            "items": []
                        },
                        {
                            "area": "7 / 13 / 8 / 16",
                            "items": []
                        },
                        {
                            "area": "8 / 1 / 9 / 4",
                            "items": []
                        },
                        {   
                            "area": "8 / 4 / 9 / 7",
                            "items": []
                        },
                        {
                            "area": "8 / 7 / 9 / 10",
                            "items": []
                        },
                        {
                            "area": "8 / 10 / 9 / 13",
                            "items": []
                        },
                        {
                            "area": "8 / 13 / 9 / 16",
                            "items": []
                        },
                        {
                            "area": "9 / 1 / 10 / 6",
                            "items": [
                                {
                                    "id": "",
                                    "no":"3960",
                                    "label": "Dish 4 x 4 Inverted (Radar) with Solid Stud",
                                    "colour": ["Orange", "Black", "White", "Light Grey", "Trans Clear", "Trans Orange", "Trans Green"]
                                }
                            ]
                        },
                        {
                            "area": "9 / 6 / 10 / 11",
                            "items": [
                                {
                                    "id": "",
                                    "no":"3961",
                                    "label": "Dish 8 x 8 Inverted (Radar) - Solid Studs",
                                    "colour": ["Orange", "Black"]
                                },
                                {
                                    "id": "",
                                    "no":"4285b",
                                    "label": "Dish 6 x 6 Inverted (Radar) Webbed",
                                    "colour": ["Black", "White","Dark Grey", "Light Grey", "Trans Blue", "Trans Red"]
                                },
                                {
                                    "id": "",
                                    "no":"44375",
                                    "label": "LegoDish 6 x 6 Inverted (Radar)",
                                    "colour": ["Light Grey"],
                                    "quantity": 1
                                }
                            ]
                        },
                        {
                            "area": "9 / 11 / 10 / 16",
                            "items": [
                                {
                                    "id": "",
                                    "no":"3941",
                                    "label": "Brick, Round 2 x 2 with Axle Hole",
                                    "colour": ["Yellow", "Brown", "Green", "White", "Blue", "Purple", "Sand", "Dark Grey", "Light Grey"],
                                }
                            ]
                        },
                        {
                            "area": "10 / 1 / 11 / 16" ,
                            "items": [
                                {
                                    "id": "",
                                    "no":"88646",
                                    "label": "Tile, Modified 3 x 4 with 4 Studs in Center",
                                    "colour": ["Orange", "Black", "White"]
                                }
                            ]
                        }
                    ]
                },
                {
                    "label":"RAACO 2",
                    "type":"Drawers",
                    "id": "54a53cfe-c203-4c34-b15c-4e3bcfca234e",
                    "containers": [
                        {
                            "area": "1 / 1 / 2 / 4",
                            "items": []
                        },
                        {
                            "area": "1 / 4 / 2 / 7",
                            "items": []
                        },
                        {
                            "area": "1 / 7 / 2 / 10",
                            "items": []
                        },
                        {
                            "area": "1 / 10 / 2 / 13",
                            "items": []
                        },
                        {
                            "area": "1 / 13 / 2 / 16",
                            "items": []
                        },
                        {
                            "area": "2 / 1 / 3 / 4",
                            "items": []
                        },
                        {
                            "area": "2 / 4 / 3 / 7",
                            "items": []
                        },
                        {
                            "area": "2 / 7 / 3 / 10",
                            "items": []
                        },
                        {
                            "area": "2 / 10 / 3 / 13",
                            "items": []
                        },
                        {
                            "area": "2 / 13 / 3 / 16",
                            "items": []
                        },
                        {
                            "area": "3 / 1 / 4 / 4",
                            "items": []
                        },
                        {
                            "area": "3 / 4 / 4 / 7",
                            "items": []
                        },
                        {
                            "area": "3 / 7 / 4 / 10",
                            "items": []
                        },
                        {
                            "area": "3 / 10 / 4 / 13",
                            "items": []
                        },
                        {
                            "area": "3 / 13 / 4 / 16",
                            "items": []
                        },
                        {
                            "area": "4 / 1 / 5 / 4",
                            "items": []
                        },
                        {
                            "area": "4 / 4 / 5 / 7",
                            "items": []
                        },
                        {
                            "area": "4 / 7 / 5 / 10",
                            "items": []
                        },
                        {
                            "area": "4 / 10 / 5 / 13",
                            "items": []
                        },
                        {
                            "area": "4 / 13 / 5 / 16",
                            "items": []
                        },
                        {
                            "area": "5 / 1 / 6 / 4",
                            "items": []
                        },
                        {
                            "area": "5 / 4 / 6 / 7",
                            "items": []
                        },
                        {
                            "area": "5 / 7 / 6 / 10",
                            "items": []
                        },
                        {
                            "area": "5 / 10 / 6 / 13",
                            "items": []
                        },
                        { 
                            "area": "5 / 13 / 6 / 16",
                            "items": []
                        },
                        {
                            "area": "6 / 1 / 7 / 4",
                            "items": []
                        },
                        {
                            "area": "6 / 4 / 7 / 7",
                            "items": []
                        },
                        {
                            "area": "6 / 7 / 7 / 10",
                            "items": []
                        },
                        {
                            "area": "6 / 10 / 7 / 13",
                            "items": []
                        },
                        {
                            "area": "6 / 13 / 7 / 16",
                            "items": []
                        },
                        {
                            "area": "7 / 1 / 8 / 4",
                            "items": []
                        },
                        {
                            "area": "7 / 4 / 8 / 7",
                            "items": []
                        },
                        {
                            "area": "7 / 7 / 8 / 10",
                            "items": []
                        },
                        {
                            "area": "7 / 10 / 8 / 13",
                            "items": []
                        },
                        {
                            "area": "7 / 13 / 8 / 16",
                            "items": []
                        },
                        {
                            "area": "8 / 1 / 9 / 4",
                            "items": []
                        },
                        {   
                            "area": "8 / 4 / 9 / 7",
                            "items": []
                        },
                        {
                            "area": "8 / 7 / 9 / 10",
                            "items": []
                        },
                        {
                            "area": "8 / 10 / 9 / 13",
                            "items": []
                        },
                        {
                            "area": "8 / 13 / 9 / 16",
                            "items": []
                        },
                        {
                            "area": "9 / 1 / 10 / 6",
                            "items": []
                        },
                        {
                            "area": "9 / 6 / 10 / 11",
                            "items": []
                        },
                        {
                            "area": "9 / 11 / 10 / 16",
                            "items": []
                        },
                        {
                            "area": "10 / 1 / 11 / 16" ,
                            "items": []
                        }
                    ],
                    "grid": {
                        "rows": 10,
                        "columns":15
                    }
                },
                {
                    "label":"RAACO 3",
                    "type":"Drawers",
                    "id": "5a0920a3-fa6b-4b8d-a3d0-225b89b4eb1d",
                    "containers": [
                        { "area": "1 / 1 / 2 / 4"},
                        { "area": "1 / 4 / 2 / 7"},
                        { "area": "1 / 7 / 2 / 10"},
                        { "area": "1 / 10 / 2 / 13"},
                        { "area": "1 / 13 / 2 / 16"},
                        { "area": "2 / 1 / 3 / 4"},
                        { "area": "2 / 4 / 3 / 7"},
                        { "area": "2 / 7 / 3 / 10"},
                        { "area": "2 / 10 / 3 / 13"},
                        { "area": "2 / 13 / 3 / 16"},
                        { "area": "3 / 1 / 4 / 4"},
                        { "area": "3 / 4 / 4 / 7"},
                        { "area": "3 / 7 / 4 / 10"},
                        { "area": "3 / 10 / 4 / 13"},
                        { "area": "3 / 13 / 4 / 16"},
                        { "area": "4 / 1 / 5 / 4"},
                        { "area": "4 / 4 / 5 / 7"},
                        { "area": "4 / 7 / 5 / 10"},
                        { "area": "4 / 10 / 5 / 13"},
                        { "area": "4 / 13 / 5 / 16"},
                        { "area": "5 / 1 / 6 / 4"},
                        { "area": "5 / 4 / 6 / 7"},
                        { "area": "5 / 7 / 6 / 10"},
                        { "area": "5 / 10 / 6 / 13"},
                        { "area": "5 / 13 / 6 / 16"},
                        { "area": "6 / 1 / 7 / 4"},
                        { "area": "6 / 4 / 7 / 7"},
                        { "area": "6 / 7 / 7 / 10"},
                        { "area": "6 / 10 / 7 / 13"},
                        { "area": "6 / 13 / 7 / 16"},
                        { "area": "7 / 1 / 8 / 6"},
                        { "area": "7 / 6 / 8 / 11"},
                        { "area": "7 / 11 / 8 / 16"},
                        { "area": "8 / 1 / 9 / 6"},
                        { "area": "8 / 6 / 9 / 11"},
                        { "area": "8 / 11 / 9 / 16"},
                        { "area": "9 / 1 / 10 / 6"},
                        { "area": "9 / 6 / 10 / 11"},
                        { "area": "9 / 11 / 10 / 16"},
                        { "area": "10 / 1 / 11 / 16"}
                    ],
                    "grid": {
                        "rows": 10,
                        "columns":15
                    }
                },
                {
                    "label":"RAACO 4",
                    "type":"Drawers",
                    "id": "7afa4e20-c85b-4942-a865-2b4d8937bc27",
                    "containers": [
                        { "area": "1 / 1 / 2 / 4"},
                        { "area": "1 / 4 / 2 / 7"},
                        { "area": "1 / 7 / 2 / 10"},
                        { "area": "1 / 10 / 2 / 13"},
                        { "area": "1 / 13 / 2 / 16"},
                        { "area": "2 / 1 / 3 / 4"},
                        { "area": "2 / 4 / 3 / 7"},
                        { "area": "2 / 7 / 3 / 10"},
                        { "area": "2 / 10 / 3 / 13"},
                        { "area": "2 / 13 / 3 / 16"},
                        { "area": "3 / 1 / 4 / 4"},
                        { "area": "3 / 4 / 4 / 7"},
                        { "area": "3 / 7 / 4 / 10"},
                        { "area": "3 / 10 / 4 / 13"},
                        { "area": "3 / 13 / 4 / 16"},
                        { "area": "4 / 1 / 5 / 4"},
                        { "area": "4 / 4 / 5 / 7"},
                        { "area": "4 / 7 / 5 / 10"},
                        { "area": "4 / 10 / 5 / 13"},
                        { "area": "4 / 13 / 5 / 16"},
                        { "area": "5 / 1 / 6 / 4"},
                        { "area": "5 / 4 / 6 / 7"},
                        { "area": "5 / 7 / 6 / 10"},
                        { "area": "5 / 10 / 6 / 13"},
                        { "area": "5 / 13 / 6 / 16"},
                        { "area": "6 / 1 / 7 / 4"},
                        { "area": "6 / 4 / 7 / 7"},
                        { "area": "6 / 7 / 7 / 10"},
                        { "area": "6 / 10 / 7 / 13"},
                        { "area": "6 / 13 / 7 / 16"},
                        { "area": "7 / 1 / 8 / 6"},
                        { "area": "7 / 6 / 8 / 11"},
                        { "area": "7 / 11 / 8 / 16"},
                        { "area": "8 / 1 / 9 / 6"},
                        { "area": "8 / 6 / 9 / 11"},
                        { "area": "8 / 11 / 9 / 16"},
                        { "area": "9 / 1 / 10 / 6"},
                        { "area": "9 / 6 / 10 / 11"},
                        { "area": "9 / 11 / 10 / 16"},
                        { "area": "10 / 1 / 11 / 16"}
                    ],
                    "grid": {
                        "rows": 10,
                        "columns":15
                    }
                },
                {
                    "label":"RAACO 5",
                    "type":"Drawers",
                    "id": "148dcfb4-5071-4414-b13e-ee4a8b9dc687",
                    "containers": [
                        { "area": "1 / 1 / 2 / 4"},
                        { "area": "1 / 4 / 2 / 7"},
                        { "area": "1 / 7 / 2 / 10"},
                        { "area": "1 / 10 / 2 / 13"},
                        { "area": "1 / 13 / 2 / 16"},
                        { "area": "2 / 1 / 3 / 4"},
                        { "area": "2 / 4 / 3 / 7"},
                        { "area": "2 / 7 / 3 / 10"},
                        { "area": "2 / 10 / 3 / 13"},
                        { "area": "2 / 13 / 3 / 16"},
                        { "area": "3 / 1 / 4 / 4"},
                        { "area": "3 / 4 / 4 / 7"},
                        { "area": "3 / 7 / 4 / 10"},
                        { "area": "3 / 10 / 4 / 13"},
                        { "area": "3 / 13 / 4 / 16"},
                        { "area": "4 / 1 / 5 / 4"},
                        { "area": "4 / 4 / 5 / 7"},
                        { "area": "4 / 7 / 5 / 10"},
                        { "area": "4 / 10 / 5 / 13"},
                        { "area": "4 / 13 / 5 / 16"},
                        { "area": "5 / 1 / 6 / 4"},
                        { "area": "5 / 4 / 6 / 7"},
                        { "area": "5 / 7 / 6 / 10"},
                        { "area": "5 / 10 / 6 / 13"},
                        { "area": "5 / 13 / 6 / 16"},
                        { "area": "6 / 1 / 7 / 4"},
                        { "area": "6 / 4 / 7 / 7"},
                        { "area": "6 / 7 / 7 / 10"},
                        { "area": "6 / 10 / 7 / 13"},
                        { "area": "6 / 13 / 7 / 16"},
                        { "area": "7 / 1 / 8 / 6"},
                        { "area": "7 / 6 / 8 / 11"},
                        { "area": "7 / 11 / 8 / 16"},
                        { "area": "8 / 1 / 9 / 6"},
                        { "area": "8 / 6 / 9 / 11"},
                        { "area": "8 / 11 / 9 / 16"},
                        { "area": "9 / 1 / 10 / 6"},
                        { "area": "9 / 6 / 10 / 11"},
                        { "area": "9 / 11 / 10 / 16"},
                        { "area": "10 / 1 / 11 / 16"}
                    ],
                    "grid": {
                        "rows": 10,
                        "columns":15
                    }
                },
                {
                    "label":"RAACO 6",
                    "type":"Drawers",
                    "id": "6a13c0c8-06f1-4ea8-9b26-cbbbbb6bc45b",
                    "containers": [
                        { "area": "1 / 1 / 2 / 4"},
                        { "area": "1 / 4 / 2 / 7"},
                        { "area": "1 / 7 / 2 / 10"},
                        { "area": "1 / 10 / 2 / 13"},
                        { "area": "1 / 13 / 2 / 16"},
                        { "area": "2 / 1 / 3 / 4"},
                        { "area": "2 / 4 / 3 / 7"},
                        { "area": "2 / 7 / 3 / 10"},
                        { "area": "2 / 10 / 3 / 13"},
                        { "area": "2 / 13 / 3 / 16"},
                        { "area": "3 / 1 / 4 / 4"},
                        { "area": "3 / 4 / 4 / 7"},
                        { "area": "3 / 7 / 4 / 10"},
                        { "area": "3 / 10 / 4 / 13"},
                        { "area": "3 / 13 / 4 / 16"},
                        { "area": "4 / 1 / 5 / 4"},
                        { "area": "4 / 4 / 5 / 7"},
                        { "area": "4 / 7 / 5 / 10"},
                        { "area": "4 / 10 / 5 / 13"},
                        { "area": "4 / 13 / 5 / 16"},
                        { "area": "5 / 1 / 6 / 4"},
                        { "area": "5 / 4 / 6 / 7"},
                        { "area": "5 / 7 / 6 / 10"},
                        { "area": "5 / 10 / 6 / 13"},
                        { "area": "5 / 13 / 6 / 16"},
                        { "area": "6 / 1 / 7 / 4"},
                        { "area": "6 / 4 / 7 / 7"},
                        { "area": "6 / 7 / 7 / 10"},
                        { "area": "6 / 10 / 7 / 13"},
                        { "area": "6 / 13 / 7 / 16"},
                        { "area": "7 / 1 / 8 / 6"},
                        { "area": "7 / 6 / 8 / 11"},
                        { "area": "7 / 11 / 8 / 16"},
                        { "area": "8 / 1 / 9 / 6"},
                        { "area": "8 / 6 / 9 / 11"},
                        { "area": "8 / 11 / 9 / 16"},
                        { "area": "9 / 1 / 10 / 6"},
                        { "area": "9 / 6 / 10 / 11"},
                        { "area": "9 / 11 / 10 / 16"},
                        { "area": "10 / 1 / 11 / 16"}
                    ],
                    "grid": {
                        "rows": 10,
                        "columns":15
                    }
                },
                {
                    "label": "Wham",
                    "pc": "WM3810ORGC",
                    "type": "box",
                    "description": "10 Compartment Organiser",
                    "id": "4d97cb77-bdc5-4cb0-8b26-1dd4efcf3879",
                    "containers": [
                        {"area": " 1 / 1 / 3 / 2"},
                        {"area": " 3 / 1 / 4 / 2"},
                        {"area": " 4 / 1 / 5 / 2"},
                        {"area": " 1 / 2 / 2 / 3"},
                        {"area": " 2 / 2 / 3 / 3"},
                        {"area": " 3 / 2 / 4 / 3"},
                        {"area": " 4 / 2 / 5 / 3"},
                        {"area": " 1 / 3 / 2 / 5"},
                        {"area": " 2 / 3 / 5 / 4"},
                        {"area": " 2 / 4 / 5 / 5"}
                    ],
                    "grid": {
                        "rows": 4,
                        "columns":4
                    }
                },
                {
                    "label": "Wham",
                    "pc": "WM3810ORGC",
                    "type": "box",
                    "description": "10 Compartment Organiser",
                    "id": "69acecfe-4fcf-4da8-b86d-2f5c480f23bd",
                    "containers": [
                        {"area": " 1 / 1 / 3 / 2"},
                        {"area": " 3 / 1 / 4 / 2"},
                        {"area": " 4 / 1 / 5 / 2"},
                        {"area": " 1 / 2 / 2 / 3"},
                        {"area": " 2 / 2 / 3 / 3"},
                        {"area": " 3 / 2 / 4 / 3"},
                        {"area": " 4 / 2 / 5 / 3"},
                        {"area": " 1 / 3 / 2 / 5"},
                        {"area": " 2 / 3 / 5 / 4"},
                        {"area": " 2 / 4 / 5 / 5"}
                    ],
                    "grid": {
                        "rows": 4,
                        "columns":4
                    }
                },
                {
                    "label": "Wham",
                    "pc": "WM3810ORGC",
                    "type": "box",
                    "description": "10 Compartment Organiser",
                    "id": "097aa602-42bb-4a30-abfb-38005c962f76",
                    "containers": [
                        {"area": " 1 / 1 / 3 / 2"},
                        {"area": " 3 / 1 / 4 / 2"},
                        {"area": " 4 / 1 / 5 / 2"},
                        {"area": " 1 / 2 / 2 / 3"},
                        {"area": " 2 / 2 / 3 / 3"},
                        {"area": " 3 / 2 / 4 / 3"},
                        {"area": " 4 / 2 / 5 / 3"},
                        {"area": " 1 / 3 / 2 / 5"},
                        {"area": " 2 / 3 / 5 / 4"},
                        {"area": " 2 / 4 / 5 / 5"}
                    ],
                    "grid": {
                        "rows": 4,
                        "columns":4
                    }
                },
                {
                    "label": "Wham",
                    "pc": "WM385ORGBK",
                    "type": "box",
                    "description": "5 Compartment Organiser",
                    "id": "bd41f5ba-51e3-4068-abd3-49ba578920e5",
                    "containers": [
                        {"area": "1 / 1 / 4 / 4"},
                        {"area": "1 / 4 / 5 / 5"},
                        {"area": "4 / 1 / 5 / 2"},
                        {"area": "4 / 2 / 5 / 3"},
                        {"area": "4 / 3 / 5 / 4"}
                    ],
                    "grid": {
                        "rows": 4,
                        "columns":4
                    }
                },
                {
                    "label": "Wham",
                    "pc": "WM385ORGBK",
                    "type": "box",
                    "description": "5 Compartment Organiser",
                    "id": "83f575ae-5b7c-4bb8-a0df-92a3c3d86024",
                    "containers": [
                        {"area": "1 / 1 / 4 / 4"},
                        {"area": "1 / 4 / 5 / 5"},
                        {"area": "4 / 1 / 5 / 2"},
                        {"area": "4 / 2 / 5 / 3"},
                        {"area": "4 / 3 / 5 / 4"}
                    ],
                    "grid": {
                        "rows": 4,
                        "columns":4
                    }
                },
                {
                    "label": "Wham",
                    "pc": "WM385ORGBK",
                    "type": "box",
                    "description": "5 Compartment Organiser",
                    "id": "4240aeb4-0ce1-4254-bee6-aa650de879ad",
                    "containers": [
                        {"area": "1 / 1 / 4 / 4"},
                        {"area": "1 / 4 / 5 / 5"},
                        {"area": "4 / 1 / 5 / 2"},
                        {"area": "4 / 2 / 5 / 3"},
                        {"area": "4 / 3 / 5 / 4"}
                    ],
                    "grid": {
                        "rows": 4,
                        "columns":4
                    }
                },
                {
                    "label": "Wham",
                    "pc": "WM3819ORGUP",
                    "type": "box",
                    "description": "19 Compartment Organiser",
                    "id": "ac0ab001-0061-4b12-bbbb-fefc423edea7",
                    "containers": [
                        {"area":"1 / 1 / 5 / 2"},
                        {"area":"1 / 2 / 2 / 3"},
                        {"area":"2 / 2 / 3 / 3"},
                        {"area":"3 / 2 / 4 / 3"},
                        {"area":"4 / 2 / 5 / 3"},
                        {"area":"1 / 3 / 2 / 4"},
                        {"area":"2 / 3 / 3 / 4"},
                        {"area":"3 / 3 / 4 / 4"},
                        {"area":"4 / 3 / 5 / 4"},
                        {"area":"1 / 4 / 2 / 5"},
                        {"area":"2 / 4 / 3 / 5"},
                        {"area":"3 / 4 / 4 / 5"},
                        {"area":"4 / 4 / 5 / 5"},
                        {"area":"1 / 5 / 2 / 6"},
                        {"area":"2 / 5 / 3 / 6"},
                        {"area":"3 / 5 / 4 / 6"},
                        {"area":"4 / 5 / 5 / 6"},
                        {"area":"1 / 6 / 3 / 7"},
                        {"area":"3 / 6 / 5 / 7"},
                        {"area":"5 / 1 / 6 / 7"}
                    ],
                    "grid": {
                        "rows": 6,
                        "columns":5
                    }
                },
                {
                    "label": "Wham",
                    "pc": "WM3819ORGUP",
                    "type": "box",
                    "description": "19 Compartment Organiser",
                    "id": "ae61b503-269a-47e9-9f6b-1f1ec768961c",
                    "containers": [
                        {"area":"1 / 1 / 5 / 2"},
                        {"area":"1 / 2 / 2 / 3"},
                        {"area":"2 / 2 / 3 / 3"},
                        {"area":"3 / 2 / 4 / 3"},
                        {"area":"4 / 2 / 5 / 3"},
                        {"area":"1 / 3 / 2 / 4"},
                        {"area":"2 / 3 / 3 / 4"},
                        {"area":"3 / 3 / 4 / 4"},
                        {"area":"4 / 3 / 5 / 4"},
                        {"area":"1 / 4 / 2 / 5"},
                        {"area":"2 / 4 / 3 / 5"},
                        {"area":"3 / 4 / 4 / 5"},
                        {"area":"4 / 4 / 5 / 5"},
                        {"area":"1 / 5 / 2 / 6"},
                        {"area":"2 / 5 / 3 / 6"},
                        {"area":"3 / 5 / 4 / 6"},
                        {"area":"4 / 5 / 5 / 6"},
                        {"area":"1 / 6 / 3 / 7"},
                        {"area":"3 / 6 / 5 / 7"},
                        {"area":"5 / 1 / 6 / 7"}
                    ],
                    "grid": {
                        "rows": 6,
                        "columns":5
                    }
                },
                {
                    "label": "Wham",
                    "pc": "WM3819ORGUP",
                    "type": "box",
                    "description": "19 Compartment Organiser",
                    "id": "fd4b54ff-9b9c-4895-99af-d2f7c75b29c1",
                    "containers": [
                        {"area":"1 / 1 / 5 / 2"},
                        {"area":"1 / 2 / 2 / 3"},
                        {"area":"2 / 2 / 3 / 3"},
                        {"area":"3 / 2 / 4 / 3"},
                        {"area":"4 / 2 / 5 / 3"},
                        {"area":"1 / 3 / 2 / 4"},
                        {"area":"2 / 3 / 3 / 4"},
                        {"area":"3 / 3 / 4 / 4"},
                        {"area":"4 / 3 / 5 / 4"},
                        {"area":"1 / 4 / 2 / 5"},
                        {"area":"2 / 4 / 3 / 5"},
                        {"area":"3 / 4 / 4 / 5"},
                        {"area":"4 / 4 / 5 / 5"},
                        {"area":"1 / 5 / 2 / 6"},
                        {"area":"2 / 5 / 3 / 6"},
                        {"area":"3 / 5 / 4 / 6"},
                        {"area":"4 / 5 / 5 / 6"},
                        {"area":"1 / 6 / 3 / 7"},
                        {"area":"3 / 6 / 5 / 7"},
                        {"area":"5 / 1 / 6 / 7"}
                    ],
                    "grid": {
                        "rows": 6,
                        "columns":5
                    }
                },
                {
                    "label": "Wham",
                    "pc": "WM3818ORGC",
                    "type": "box",
                    "description": "18 Compartment Organiser",
                    "id": "137185cb-ad74-4a8c-9daa-407117b8fb6b",
                    "containers": [
                        {"area": "1 / 1 / 2 / 2"},
                        {"area": "1 / 2 / 2 / 3"},
                        {"area": "1 / 3 / 2 / 4"},
                        {"area": "1 / 4 / 2 / 5"},
                        {"area": "1 / 5 / 2 / 6"},
                        {"area": "1 / 6 / 2 / 7"},
                        {"area": "1 / 7 / 2 / 8"},
                        {"area": "1 / 8 / 2 / 9"},
                        {"area": "2 / 1 / 3 / 3"},
                        {"area": "2 / 3 / 3 / 5"},
                        {"area": "2 / 5 / 3 / 7"},
                        {"area": "2 / 7 / 3 / 9"},
                        {"area": "3 / 1 / 4 / 3"},
                        {"area": "3 / 3 / 4 / 5"},
                        {"area": "3 / 5 / 4 / 7"},
                        {"area": "3 / 7 / 4 / 9"},
                        {"area": "4 / 1 / 5 / 5"},
                        {"area": "4 / 5 / 5 / 9"}
                    ],
                    "grid": {
                        "rows": 6,
                        "columns":5
                    }
                },
                {
                    "label": "Wham",
                    "pc": "WM3818ORGC",
                    "type": "box",
                    "description": "18 Compartment Organiser",
                    "id": "6d2cccc3-a8fe-41e6-8b40-ebf3f3502c32",
                    "containers": [
                        {"area": "1 / 1 / 2 / 2"},
                        {"area": "1 / 2 / 2 / 3"},
                        {"area": "1 / 3 / 2 / 4"},
                        {"area": "1 / 4 / 2 / 5"},
                        {"area": "1 / 5 / 2 / 6"},
                        {"area": "1 / 6 / 2 / 7"},
                        {"area": "1 / 7 / 2 / 8"},
                        {"area": "1 / 8 / 2 / 9"},
                        {"area": "2 / 1 / 3 / 3"},
                        {"area": "2 / 3 / 3 / 5"},
                        {"area": "2 / 5 / 3 / 7"},
                        {"area": "2 / 7 / 3 / 9"},
                        {"area": "3 / 1 / 4 / 3"},
                        {"area": "3 / 3 / 4 / 5"},
                        {"area": "3 / 5 / 4 / 7"},
                        {"area": "3 / 7 / 4 / 9"},
                        {"area": "4 / 1 / 5 / 5"},
                        {"area": "4 / 5 / 5 / 9"}
                    ],
                    "grid": {
                        "rows": 6,
                        "columns":5
                    }
                },
                {
                    "label": "Wham",
                    "pc": "WM3818ORGC",
                    "type": "box",
                    "description": "18 Compartment Organiser",
                    "id": "2ae08a9f-fd24-47a1-b757-a3fe8576090d",
                    "containers": [
                        {"area": "1 / 1 / 2 / 2"},
                        {"area": "1 / 2 / 2 / 3"},
                        {"area": "1 / 3 / 2 / 4"},
                        {"area": "1 / 4 / 2 / 5"},
                        {"area": "1 / 5 / 2 / 6"},
                        {"area": "1 / 6 / 2 / 7"},
                        {"area": "1 / 7 / 2 / 8"},
                        {"area": "1 / 8 / 2 / 9"},
                        {"area": "2 / 1 / 3 / 3"},
                        {"area": "2 / 3 / 3 / 5"},
                        {"area": "2 / 5 / 3 / 7"},
                        {"area": "2 / 7 / 3 / 9"},
                        {"area": "3 / 1 / 4 / 3"},
                        {"area": "3 / 3 / 4 / 5"},
                        {"area": "3 / 5 / 4 / 7"},
                        {"area": "3 / 7 / 4 / 9"},
                        {"area": "4 / 1 / 5 / 5"},
                        {"area": "4 / 5 / 5 / 9"}
                    ],
                    "grid": {
                        "rows": 6,
                        "columns":5
                    }
                }
            ]
        }
    }
};

const store = { template: '<div>store {{ $route.params.id }}</div>' }

const container = { template: '<div>container {{ $route.params.id }}</div>' }

const router = new VueRouter({
    routes: [
        { path: '/', component: stores },
        { path: '/store/:id', component: store },
        { path: '/container/:id', component: container }
    ]
});

var app = new Vue({
    router,
    data: {
       
    }
}).$mount("#app");