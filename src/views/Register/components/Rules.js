export const email = [{
        required: true,
        message: "Email is required",
        trigger: "blur",
    },
    {
        min: 2,
        message: "Email length should be at least 3 characters",
        trigger: "blur",
    }
]

export const username = [{
        required: true,
        message: "Username is required",
        trigger: "blur",
    },
    {
        min: 4,
        message: "Username length should be at least 5 characters",
        trigger: "blur",
    }
]

export const password = [{
        required: true,
        message: "Password is required",
        trigger: "blur"
    },
    {
        min: 5,
        message: "Password length should be at least 5 characters",
        trigger: "blur",
    }
]

export const confirmPassword = [{
        required: true,
        message: "Password is required",
        trigger: "blur"
    },
    {
        min: 5,
        message: "Password length should be at least 5 characters",
        trigger: "blur",
    }
]