import axios from 'axios'

export default function handler(req, res) {
  const {email} = req.body
  if(email === '' || !email.includes('@')) return res.status(400).send({error:'Email is not valid'})
    else {
      axios(`https://api.mailerlite.com/api/v2/groups/${process.env.NEXT_PUBLIC_MAILERLITE_GROUP_ID}/subscribers`,{
       method:'POST',
       data: req.body,
       headers: {
        'Content-type':'application/json',
         'X-MailerLite-ApiKey': `${process.env.NEXT_PUBLIC_MAILERLITE_API_KEY}`
       },
     })
     .then(response => {
       if(response.statusText==='OK' || response.statusMessage==='OK') 
        res.status(200).send({message:'Thank you for your subscription'})
     })
     .catch((error) => {
      return res.status(422).send({error: 'Something went wrong... try again!'})
     });
    }
  
}
