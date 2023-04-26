import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 0M-MtlBOGzWtEFpcx5jn-7vBgLMK9d1WwbpTgS2cBa4hlyeNekhqvFiRe0rkjtzGH4XrL8ShG1-lIaXxYyKkgl8Rse9tcgQhaPCCOwpdKiCMwV9HpVDzDUFRP8QsZHYx'
    }


});