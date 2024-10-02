const ApiMethod = {

    get: async () => {
        let req = await fetch(`http://localhost:3000/Questions`);
        let res = await req.json();
        return res;
    },

    post: async (Data) => {
        let req = await fetch(`http://localhost:3000/Questions`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data)
        });
        let res = await req.json();

        return res;
    },

    patch: async (Data) => {

        let req = await fetch(`http://localhost:3000/Questions`, {
            method: `PATCH`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Data)
        });
        let res = await req.json();
        return res;
    },
}