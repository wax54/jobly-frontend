import Api from "./api";
import axios from "axios";

jest.mock('axios');

describe("#getCompanies", () => {
    const testItems = [{
        handle : 'bauer-gallagher',
        name : 'Bauer-Gallagher',
        num_employees : 862,
        description : 'Difficult ready trip question produce produce someone.',
        logo_url : undefined
    }];

    it("should return [{ handle, name, num_employees, description, logo_url },...]", 
        async () => {
            axios.mockImplementationOnce((request) => {
                return Promise.resolve( { data: { companies: testItems } } );
            });
            const result = await Api.getCompanies();
            expect(result).toEqual(testItems);
    });
});

// describe("#getDrinks", () => {
//     const testItem = {
//         data: [{
//             id: "martini",
//             name: "Martini",
//             description: "An ice-cold, refreshing classic.",
//             recipe: "Mix 3 parts vodka & 1 part dry vermouth.",
//             serve: "Serve very cold, straight up."
//         }]
//     };

//     it("should return [{ id, name, description, recipe, serve },...]", async () => {
//         axios.get.mockImplementationOnce(() => Promise.resolve(testItem));
//         const result = await Api.getDrinks();
//         expect(result).toEqual(testItem.data);
//     });
// });


// describe("#createMenuItem", () => {
//     const testItem = {
//         id: "martini",
//         name: "Martini",
//         category: "drinks",
//         description: "An ice-cold, refreshing classic.",
//         recipe: "Mix 3 parts vodka & 1 part dry vermouth.",
//         serve: "Serve very cold, straight up."
//     };

//     it("should return { id, name, description, recipe, serve } if valid data", async () => {
//         let requestData;
//         axios.post.mockImplementationOnce((route, data) => {
//             requestData = data;
//             return Promise.resolve({ data })
//         });
//         const result = await Api.createMenuItem(testItem);
//         expect(result).toEqual({ ...testItem, category: undefined });
//         expect(requestData).toEqual({ ...testItem, category: undefined });
//     });

//     it("should return false if category invalid", async () => {

//         let requestData;
//         axios.post.mockImplementationOnce((route, data) => {
//             requestData = data;
//             return Promise.resolve({ data })
//         });
//         const result = await Api.createMenuItem({ ...testItem, category: 'trash' });

//         expect(result).toEqual(false);
//         expect(requestData).toEqual(undefined);
//     });
//     it("should return false if request error", async () => {

//         axios.post.mockImplementationOnce((route, data) => {
//             return Promise.reject(Error("DB ERROR"))
//         });
//         const result = await Api.createMenuItem({ ...testItem, category: 'trash' });

//         expect(result).toEqual(false);
//     });
// });