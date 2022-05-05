const axios = require("axios");

describe("POST @ products/ endpoint", () => {
	it("should save a product and and return saved product", async () => {
		try {
			const res = axios.post("http://localhost:5000/products/", {
				name: "White Chocolate",
				description: "Pure white chocolate",
				price: 250.0,
				status: "active",
				src: "https://freshmartctg.com/wp-content/uploads/2021/08/Amul-Dark-Chocolate-150-gm-min.png",
			});

			expect(res.status).toEqual(201);
		} catch (error) {
			console.log(error.response);
		}
	});
});

describe("GET @ products/ endpoint", () => {
	it("should return an products array and return status code 200", async () => {
		try {
			const res = axios.get("http://localhost:5000/customers");

			expect(res.status).toEqual(200);
			expect(typeof res.data).toEqual("Object");
		} catch (error) {
			console.log(error);
		}
	});
});
