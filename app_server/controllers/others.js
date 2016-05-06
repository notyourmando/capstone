/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'Yummy yummy in my tummy',
        content: 'SoFresh & SoGreen was created to help you find the closest farmers markets in your area.\n\n Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I am in a transitional period so I dont wanna kill you, I wanna help you. But I cant give you this case, it dont belong to me. Besides, Ive already been through too much shit this morning over this case to hand it over to your dumb ass.\n\nThe path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brothers keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.'
    });
};
