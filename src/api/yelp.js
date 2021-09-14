import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer Fu8BzEC7YFE0afN5Wme-kh011JHLWs1iosml6NWJ0MpVtXALOMOyisV0_0TBag_6W5_5oX4r8wx0Zu0mmo5bDXBjc7t2OqF-g2pfw8rWm4Z8rhV5kGiA1Pn8hY0IYHYx'
    }
});

