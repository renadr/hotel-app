export interface Hotel {
    id: number;
    name: string;
    description: string;
    imgUrl: string;
    price: number;
}

export const hotelsList: Hotel[] = [
    {
        id: 1,
        name: 'Hotel de la plage',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos iste sapiente eius, sed vitae eum possimus illo velit nobis nulla laborum porro exercitationem fugiat autem harum perspiciatis? Vel, quisquam!',
        imgUrl: 'https://s-ec.bstatic.com/images/hotel/max1024x768/292/29259467.jpg',
        price: 120
    },
    {
        id: 2,
        name: 'Ibis Hotel',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos iste sapiente eius, sed vitae eum possimus illo velit nobis nulla laborum porro exercitationem fugiat autem harum perspiciatis? Vel, quisquam!',
        imgUrl: 'https://t-ec.bstatic.com/images/hotel/max1024x768/857/85736918.jpg',
        price: 200
    },
    {
        id: 3,
        name: 'Hotel Paradis',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos iste sapiente eius, sed vitae eum possimus illo velit nobis nulla laborum porro exercitationem fugiat autem harum perspiciatis? Vel, quisquam!',
        imgUrl:
            'https://media-cdn.tripadvisor.com/media/photo-s/0f/e5/0a/6a/paradise-blue-hotel.jpg',
        price: 100
    },
    {
        id: 4,
        name: 'EVEN Hotel New York - Midtown East',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos iste sapiente eius, sed vitae eum possimus illo velit nobis nulla laborum porro exercitationem fugiat autem harum perspiciatis? Vel, quisquam!',
        imgUrl: 'https://s-ec.bstatic.com/images/hotel/max1024x768/870/87018168.jpg',
        price: 400
    }
];
