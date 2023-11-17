// All info is in Garage_paints.md

var m3Paints = [
    {
        name: "Needle",
        smoky: 50,
        shaft: 28,
        ricochet: 22
    },
    {
        name: "Zeus",
        firebird: 50,
        freeze: 25,
        smoky: 25
    },
    {
        name: "Hive",
        vulcan: 42,
        ricochet: 32,
        freeze: 26
    },
    {
        name: "Rock",
        twins: 50,
        isida: 28,
        freeze: 12,
        hammer: 10
    },
    {
        name: "Mars",
        hammer: 50,
        firebird: 30,
        isida: 20
    },
    {
        name: "Prodigi",
        railgun: 50,
        thunder: 23,
        shaft: 20,
        firebird: 7
    },
    {
        name: "Graffiti",
        vulcan: 50,
        twins: 25,
        shaft: 25
    },
    {
        name: "Irbis",
        isida: 50,
        freeze: 27,
        ricochet: 23
    },
    {
        name: "Emerald",
        thunder: 50,
        twins: 35,
        railgun: 15
    },
    {
        name: "Inferno",
        freeze: 50,
        firebird: 36,
        twins: 14
    },
    {
        name: "Nano",
        hammer: 35,
        ricochet: 32,
        smoky: 22,
        firebird: 11
    },
    {
        name: "Raccoon",
        hammer: 33,
        vulcan: 27,
        railgun: 21,
        isida: 19
    },
    {
        name: "Clay",
        ricochet: 50,
        railgun: 30,
        thunder: 20
    },
    {
        name: "Taiga",
        isida: 35,
        ricochet: 24,
        firebird: 24,
        twins: 17
    },
    {
        name: "Tiger",
        hammer: 47,
        smoky: 35,
        railgun: 18
    },
    {
        name: "Jade",
        shaft: 50,
        smoky: 24,
        hammer: 15,
        thunder: 11
    },
    {
        name: "Picasso",
        shaft: 33,
        railgun: 27,
        thunder: 20,
        freeze: 20
    },
    {
        name: "Lumberjack",
        firebird: 30,
        freeze: 30,
        isida: 30,
        vulcan: 10
    },
    {
        name: "Africa",
        vulcan: 30,
        twins: 25,
        thunder: 25,
        hammer: 20
    }
]

var m2Paints = [
    {
        name: "Desert",
        ricochet: 26,
        hammer: 10,
        twins: 8,
        smoky: 8
    },
    {
        name: "Dirty",
        shaft: 32,
        railgun: 24
    }, 
    {
        name: "Jaguar",
        freeze: 30,
        firebird: 17,
        thunder: 10
    },
    {
        name: "Savanna",
        smoky: 30,
        railgun: 16,
        ricochet: 15
    },
    {
        name: "Loam",
        firebird: 30,
        freeze: 11,
        thunder: 11,
        ricochet: 11
    },
    {
        name: "Sakura",
        hammer: 25,
        isida: 25,
        vulcan: 12
    },
    {
        name: "Urban",
        twins: 32,
        isida: 15,
        ricochet: 10,
        firebird: 10
    },
    {
        name: "Atom",
        hammer: 33,
        firebird: 18,
        freeze: 11,
        twins: 11
    },
    {
        name: "Digital",
        railgun: 35,
        smoky: 24,
        shaft: 14
    },
    {
        name: "Hohloma",
        ricochet: 30,
        smoky: 22,
        freeze: 22
    },
    {
        name: "Rhino",
        hammer: 30,
        vulcan: 30,
        firebird: 18
    },
    {
        name: "Electra",
        isida: 38,
        smoky: 20,
        twins: 20
    },
    {
        name: "Cherry",
        twins: 34,
        thunder: 28,
        vulcan: 22
    },
    {
        name: "Blacksmith",
        vulcan: 40,
        shaft: 26,
        railgun: 18
    },
    {
        name: "Rustle",
        thunder: 40,
        freeze: 30,
        isida: 15
    },
    {
        name: "Python",
        freeze: 44,
        shaft: 40
    },
    {
        name: "Sandstone",
        railgun: 34,
        shaft: 22,
        thunder: 22,
        twins: 12
    },
    {
        name: "Spark",
        ricochet: 42,
        firebird: 30,
        twins: 18
    },
    {
        name: "Winter",
        shaft: 45,
        thunder: 26,
        railgun: 12,
        firebird: 12
    }
]

var specialPaints = [
    {
        name: "Premium",
        firebird: 15,
        freeze: 15,
        isida: 15,
        hammer: 15,
        twins: 15,
        ricochet: 15,
        smoky: 15,
        thunder: 15,
        vulcan: 15,
        railgun: 15,
        shaft: 15
    }/*,
    {
        name: "Helper",
        firebird: 20,
        freeze: 20,
        isida: 20,
        hammer: 20,
        twins: 20,
        ricochet: 20,
        smoky: 20,
        thunder: 20,
        vulcan: 20,
        railgun: 20,
        shaft: 20
    }*/
]

if (module) {
    module.exports = {
        m3Paints,
        m2Paints,
        specialPaints
    }
}