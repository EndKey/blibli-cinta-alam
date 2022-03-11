var routes = [
    {
        method: 'GET',
        url: '/backend/cintaBumi/findUserDetailById',
        response: {
            serialVersionUID: 0,
            success: true,
            errorMessage: '',
            content: {
                userId: 'userrizki@gmail.com',
                name: 'Rizki',
                treesPlanted: 1.0,
                carbonOffset: 31.5,
                unclaimedPoints: 20,
                serialVersionUID: 0,
                id: 'id-rizki',
                storeId: '10001',
                version: 0,
                createdDate: '2022-03-10 18:46:27',
                createdBy: '',
                updatedDate: '2022-03-10 18:46:27',
                updatedBy: '',
                markForDelete: false
            }
        }
    },
    {
        method: 'GET',
        url: '/backend/cintaBumi/getProjectsList',
        response: {
            serialVersionUID: 0,
            success: false,
            errorMessage: '',
            content: [
                {
                    id: 'id-rizki',
                    name: 'Rizki',
                    streetName: 'Jalan Rembang – Blora Km 5',
                    city: 'Kota Rembang',
                    province: 'Jawa Tengah',
                    country: 'Indonesia',
                    numberOfTreesNeeded: 200,
                    currentTreesPlanted: 150,
                    deadlineTimestamp: 1647619200000,
                    serialVersionUID: 0,
                    storeId: '10001',
                    version: 0,
                    createdDate: '2022-03-10 18:46:27',
                    createdBy: '',
                    updatedDate: '2022-03-10 18:46:27',
                    updatedBy: '',
                    markForDelete: false
                }
            ]
        }
    },
    {
        method: 'GET',
        url: '/backend/cintaBumi/findHistoryListByUserId',
        response: {
            serialVersionUID: 0,
            success: false,
            errorMessage: '',
            content: [
                {
                    id: 'id-rizki',
                    description: '0.25KgCO2',
                    amount: '0',
                    timestamp: 1647026261000,
                    price: 3600,
                    trees: 0.231,
                    serialVersionUID: 0,
                    storeId: '10001',
                    version: 0,
                    createdDate: '2022-03-10 18:46:27',
                    createdBy: '',
                    updatedDate: '2022-03-10 18:46:27',
                    updatedBy: '',
                    markForDelete: false
                },
                {
                    id: 'id-rizki2',
                    description: '0.25KgCO2',
                    amount: '0',
                    timestamp: 1647026828000,
                    price: 3600,
                    trees: 0.231,
                    serialVersionUID: 0,
                    storeId: '10001',
                    version: 0,
                    createdDate: '2022-03-10 18:46:27',
                    createdBy: '',
                    updatedDate: '2022-03-10 18:46:27',
                    updatedBy: '',
                    markForDelete: false
                },
                {
                    id: 'id-rizki3',
                    description: 'Box Returned',
                    amount: '1',
                    timestamp: 1647026939000,
                    price: 0,
                    trees: 0.42,
                    serialVersionUID: 0,
                    storeId: '10001',
                    version: 0,
                    createdDate: '2022-03-10 18:46:27',
                    createdBy: '',
                    updatedDate: '2022-03-10 18:46:27',
                    updatedBy: '',
                    markForDelete: false
                },
                {
                    id: 'id-rizki4',
                    description: 'Box Returned',
                    amount: '1',
                    timestamp: 1647026947000,
                    price: 0,
                    trees: 0.42,
                    serialVersionUID: 0,
                    storeId: '10001',
                    version: 0,
                    createdDate: '2022-03-10 18:46:27',
                    createdBy: '',
                    updatedDate: '2022-03-10 18:46:27',
                    updatedBy: '',
                    markForDelete: false
                }
            ]
        }
    }
]

export default routes
