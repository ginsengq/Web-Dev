import { Component } from '@angular/core';
import {RouterOutlet, ɵEmptyOutletComponent} from '@angular/router';
import {ProductCardComponent} from './products/product-card/product-card.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ɵEmptyOutletComponent, ProductCardComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p90/pb1/18048111.jpeg?format=gallery-medium',
      name: 'Maison Francis Kurkdjian Baccarat Rouge 540 70мл',
      description: 'The woody scent releases a poetic alchemy, a highly condensed and graphic olfactory signature. Breezy jasmine facets, radiant saffron boost the ambergris mineral notes and the woody tones of freshly-cut cedar.',
      price: 144787,
      link: 'https://kaspi.kz/shop/p/maison-francis-kurkdjian-baccarat-rouge-540-ekstrakt-duhov-extrait-de-parfum-70-ml-uniseks-17303136/?c=750000000',
      rating: 4.89,
      commentsLink: 'https://kaspi.kz/shop/p/maison-francis-kurkdjian-baccarat-rouge-540-ekstrakt-duhov-extrait-de-parfum-70-ml-uniseks-17303136/?c=750000000&tab=reviews',
      commentsNumber: 21
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h37/hfe/86595997859870.jpg?format=gallery-medium',
      name: 'Сумка тоут Coach MB06155MP',
      description: 'Featuring a spacious interior and sturdy handles, it seamlessly blends elegance with everyday practicality. Perfect for work or casual outings, this timeless tote adds a touch of sophistication to any look.',
      price: 170000,
      link: 'https://kaspi.kz/shop/p/sumka-tout-coach-mb06155mp-natural-naja-kozha-chernyi-121698825/?c=750000000',
      rating: 0,
      commentsNumber: 0,
      commentsLink: 'https://kaspi.kz/shop/p/sumka-tout-coach-mb06155mp-natural-naja-kozha-chernyi-121698825/?c=750000000&tab=reviews'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8b/h9d/63787311497246.jpg?format=gallery-medium',
      name: 'Giorgio Armani Prive Bleu Turquoise 100ml',
      description: 'Bleu Turquoise is a perfume where the sky meets the sea, with salty mineral accords transitioning to addictive vanilla. The precious turquoise stone is one of the oldest gems in mans history, a talisman of rulers, shamans, and warriors.',
      price: 194860,
      link: 'https://kaspi.kz/shop/p/giorgio-armani-prive-bleu-turquoise-parfjumernaja-voda-edp-100-ml-uniseks-17302557/?c=750000000',
      rating: 5.00,
      commentsNumber: 4,
      commentsLink: 'https://kaspi.kz/shop/p/giorgio-armani-prive-bleu-turquoise-parfjumernaja-voda-edp-100-ml-uniseks-17302557/?c=750000000&tab=reviews'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/hb7/86395902328862.jpg?format=gallery-medium',
      name: 'TOM FORD Ombre Leather духи PARFUM 50 мл',
      description: 'Dust on wind, skin on skin, the Ombré Leather fragrance evokes the desert heart of the west. The sensuality of rich black leather is texturized with patchouli and vetiver, while floral tones of jasmine sambac conjure wild desert beauty – and layers of amber and moss mimic the heat of rock and sand.',
      price: 64500,
      link: 'https://kaspi.kz/shop/p/tom-ford-ombre-leather-duhi-parfum-50-ml-uniseks-107224303/?c=750000000',
      rating: 4.98,
      commentsNumber: 16,
      commentsLink: 'https://kaspi.kz/shop/p/tom-ford-ombre-leather-duhi-parfum-50-ml-uniseks-107224303/?c=750000000&tab=reviews'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf5/ha1/64082961334302.jpg?format=gallery-medium',
      name: 'Yves Saint Laurent Libre парфюмерная вода EDP 90 мл',
      description: 'Lavender essence from France combines with the sensuality of Moroccan orange blossom, daring notes of musk accord and warm vanilla to create a unique long-lasting perfume. ',
      price: 59105,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-serebristyi-123889795/?c=750000000',
      rating: 5.00,
      commentsNumber: 26,
      commentsLink: 'https://kaspi.kz/shop/p/yves-saint-laurent-libre-parfjumernaja-voda-edp-90-ml-dlja-zhenschin-102147227/?c=750000000&tab=reviews'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he0/h34/85091910582302.jpg?format=gallery-medium',
      name: 'Valentino Uomo Born In Roma Intense парфюмерная вода EDP 100 мл',
      description: 'he scent of this Born In Roma fragrance amplifies the Born In Roma addiction by pushing powerful vanilla infusion. This unsweetened and leathery note is intensified by the Heart of vetiver and lifted with a floral and aromatic freshness thanks to lavandin.',
      price: 76999,
      link: 'https://kaspi.kz/shop/p/valentino-uomo-born-in-roma-intense-parfjumernaja-voda-edp-100-ml-dlja-muzhchin-116425637/?c=750000000',
      rating: 5.00,
      commentsNumber: 5,
      commentsLink: 'https://kaspi.kz/shop/p/valentino-uomo-born-in-roma-intense-parfjumernaja-voda-edp-100-ml-dlja-muzhchin-116425637/?c=750000000&tab=reviews'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/h0d/85980543909918.jpg?format=gallery-medium',
      name: 'Carolina Herrera Good Girl Blush Elixir парфюмерная вода EDP 80 мл',
      description: 'Good Girl Blush Elixir is a sensual, more intense interpretation of Good Girl Blush, housed in an alluring degrade bottle. This new addition to the Good Girl family reveals the multifaceted nature of modern femininity with a seductive blend of rose, vanilla and patchouli.',
      price: 55898,
      link: 'https://kaspi.kz/shop/p/carolina-herrera-good-girl-blush-elixir-parfjumernaja-voda-edp-80-ml-dlja-zhenschin-119236752/?c=750000000',
      rating: 5.00,
      commentsNumber: 5,
      commentsLink: 'https://kaspi.kz/shop/p/carolina-herrera-good-girl-blush-elixir-parfjumernaja-voda-edp-80-ml-dlja-zhenschin-119236752/?c=750000000&tab=reviews'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5f/hb6/65458998116382.jpg?format=gallery-medium',
      name: 'CHANEL Bleu De Chanel духи PARFUM 150 мл',
      description: 'BLEU DE CHANEL exudes accomplishment through a timeless and unexpected scent. This aromatic-woody perfume with a captivating trail embodies freedom with its strength and elegance, just like the man who wears it.',
      price: 114302 ,
      link: 'https://kaspi.kz/shop/p/chanel-bleu-de-chanel-duhi-parfum-150-ml-dlja-muzhchin-107017234/?c=750000000',
      rating: 5.00,
      commentsNumber: 27,
      commentsLink: 'https://kaspi.kz/shop/p/chanel-bleu-de-chanel-duhi-parfum-150-ml-dlja-muzhchin-107017234/?c=750000000&tab=reviews'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h6a/64422732660766.jpg?format=gallery-medium',
      name: 'Guerlain Aqua Allegoria Forte Mandarine Basilic 75ml',
      description: 'The refillable fragrance is composed of up to 95% natural-origin ingredients and is paired with a vibrant basil, beautifully enhanced by the warmth of sandalwood and the delicious vanilla tincture.',
      price: 52789,
      link: 'https://kaspi.kz/shop/p/guerlain-aqua-allegoria-forte-mandarine-basilic-parfjumernaja-voda-edp-75-ml-106835576/?c=750000000',
      rating: 5.00,
      commentsNumber: 14,
      commentsLink: 'https://kaspi.kz/shop/p/guerlain-aqua-allegoria-forte-mandarine-basilic-parfjumernaja-voda-edp-75-ml-106835576/?c=750000000&tab=reviews'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf9/h0e/64053318123550.jpg?format=gallery-medium',
      name: 'Dior Miss Dior Absolutely Blooming 100ml',
      description: 'This Christian Dior perfume for women has fruity top notes that embrace the fusion of pink pepper, raspberry, pomegranate, and black currant.',
      price: 82914,
      link: 'https://kaspi.kz/shop/p/dior-miss-dior-absolutely-blooming-parfjumernaja-voda-edp-100-ml-100872090/?c=750000000',
      rating: 5,
      commentsNumber: 12,
      commentsLink: 'https://kaspi.kz/shop/p/dior-miss-dior-absolutely-blooming-parfjumernaja-voda-edp-100-ml-100872090/?c=750000000&tab=reviews'
    }
  ]
}
