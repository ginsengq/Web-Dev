import { Component } from '@angular/core';
import {RouterOutlet, ɵEmptyOutletComponent} from '@angular/router';
import {ProductCardComponent} from './products/product-card/product-card.component';
import {NgForOf} from '@angular/common';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './products/product-list/product-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  CommonModule, ProductCardComponent, NgForOf, HeaderComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  categories = [ 
    {
      id: 1,
      name: 'Perfumes',
      products: [
      {
      id: 101,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p90/pb1/18048111.jpeg?format=gallery-medium',
      name: 'Maison Francis Kurkdjian Baccarat Rouge 540 70мл',
      description: 'The woody scent releases a poetic alchemy, a highly condensed and graphic olfactory signature. Breezy jasmine facets, radiant saffron boost the ambergris mineral notes and the woody tones of freshly-cut cedar.',
      price: 144787,
      link: 'https://kaspi.kz/shop/p/maison-francis-kurkdjian-baccarat-rouge-540-ekstrakt-duhov-extrait-de-parfum-70-ml-uniseks-17303136/?c=750000000',
      rating: 4.89,
      likes: 0,
      commentsLink: 'https://kaspi.kz/shop/p/maison-francis-kurkdjian-baccarat-rouge-540-ekstrakt-duhov-extrait-de-parfum-70-ml-uniseks-17303136/?c=750000000&tab=reviews',
      commentsNumber: 21
      },
      {
      id: 103,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8b/h9d/63787311497246.jpg?format=gallery-medium',
      name: 'Giorgio Armani Prive Bleu Turquoise 100ml',
      description: 'Bleu Turquoise is a perfume where the sky meets the sea, with salty mineral accords transitioning to addictive vanilla. The precious turquoise stone is one of the oldest gems in mans history, a talisman of rulers, shamans, and warriors.',
      price: 194860,
      link: 'https://kaspi.kz/shop/p/giorgio-armani-prive-bleu-turquoise-parfjumernaja-voda-edp-100-ml-uniseks-17302557/?c=750000000',
      rating: 5.00,
      likes: 0,
      commentsNumber: 4,
      commentsLink: 'https://kaspi.kz/shop/p/giorgio-armani-prive-bleu-turquoise-parfjumernaja-voda-edp-100-ml-uniseks-17302557/?c=750000000&tab=reviews'
      },
      {
      id: 104,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf5/ha1/64082961334302.jpg?format=gallery-medium',
      name: 'Yves Saint Laurent Libre парфюмерная вода EDP 90 мл',
      description: 'Lavender essence from France combines with the sensuality of Moroccan orange blossom, daring notes of musk accord and warm vanilla to create a unique long-lasting perfume. ',
      price: 59105,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-serebristyi-123889795/?c=750000000',
      rating: 5.00,
      likes: 0,
      commentsNumber: 26,
      commentsLink: 'https://kaspi.kz/shop/p/yves-saint-laurent-libre-parfjumernaja-voda-edp-90-ml-dlja-zhenschin-102147227/?c=750000000&tab=reviews'
      },
      {
      id: 105,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he0/h34/85091910582302.jpg?format=gallery-medium',
      name: 'Valentino Uomo Born In Roma Intense парфюмерная вода EDP 100 мл',
      description: 'he scent of this Born In Roma fragrance amplifies the Born In Roma addiction by pushing powerful vanilla infusion. This unsweetened and leathery note is intensified by the Heart of vetiver and lifted with a floral and aromatic freshness thanks to lavandin.',
      price: 76999,
      link: 'https://kaspi.kz/shop/p/valentino-uomo-born-in-roma-intense-parfjumernaja-voda-edp-100-ml-dlja-muzhchin-116425637/?c=750000000',
      rating: 5.00,
      likes: 0,
      commentsNumber: 5,
      commentsLink: 'https://kaspi.kz/shop/p/valentino-uomo-born-in-roma-intense-parfjumernaja-voda-edp-100-ml-dlja-muzhchin-116425637/?c=750000000&tab=reviews'
      },
      {
      id: 106,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/h0d/85980543909918.jpg?format=gallery-medium',
      name: 'Carolina Herrera Good Girl Blush Elixir парфюмерная вода EDP 80 мл',
      description: 'Good Girl Blush Elixir is a sensual, more intense interpretation of Good Girl Blush, housed in an alluring degrade bottle. This new addition to the Good Girl family reveals the multifaceted nature of modern femininity with a seductive blend of rose, vanilla and patchouli.',
      price: 55898,
      link: 'https://kaspi.kz/shop/p/carolina-herrera-good-girl-blush-elixir-parfjumernaja-voda-edp-80-ml-dlja-zhenschin-119236752/?c=750000000',
      rating: 5.00,
      likes: 0,
      commentsNumber: 5,
      commentsLink: 'https://kaspi.kz/shop/p/carolina-herrera-good-girl-blush-elixir-parfjumernaja-voda-edp-80-ml-dlja-zhenschin-119236752/?c=750000000&tab=reviews'
      },
      {
      id: 107,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5f/hb6/65458998116382.jpg?format=gallery-medium',
      name: 'CHANEL Bleu De Chanel духи PARFUM 150 мл',
      description: 'BLEU DE CHANEL exudes accomplishment through a timeless and unexpected scent. This aromatic-woody perfume with a captivating trail embodies freedom with its strength and elegance, just like the man who wears it.',
      price: 114302 ,
      link: 'https://kaspi.kz/shop/p/chanel-bleu-de-chanel-duhi-parfum-150-ml-dlja-muzhchin-107017234/?c=750000000',
      rating: 5.00,
      likes: 0,
      commentsNumber: 27,
      commentsLink: 'https://kaspi.kz/shop/p/chanel-bleu-de-chanel-duhi-parfum-150-ml-dlja-muzhchin-107017234/?c=750000000&tab=reviews'
      },
      {
      id: 108,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h6a/64422732660766.jpg?format=gallery-medium',
      name: 'Guerlain Aqua Allegoria Forte Mandarine Basilic 75ml',
      description: 'The refillable fragrance is composed of up to 95% natural-origin ingredients and is paired with a vibrant basil, beautifully enhanced by the warmth of sandalwood and the delicious vanilla tincture.',
      price: 52789,
      link: 'https://kaspi.kz/shop/p/guerlain-aqua-allegoria-forte-mandarine-basilic-parfjumernaja-voda-edp-75-ml-106835576/?c=750000000',
      rating: 5.00,
      likes: 0,
      commentsNumber: 14,
      commentsLink: 'https://kaspi.kz/shop/p/guerlain-aqua-allegoria-forte-mandarine-basilic-parfjumernaja-voda-edp-75-ml-106835576/?c=750000000&tab=reviews'
      },
      {
      id: 109,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf9/h0e/64053318123550.jpg?format=gallery-medium',
      name: 'Dior Miss Dior Absolutely Blooming 100ml',
      description: 'This Christian Dior perfume for women has fruity top notes that embrace the fusion of pink pepper, raspberry, pomegranate, and black currant.',
      price: 82914,
      link: 'https://kaspi.kz/shop/p/dior-miss-dior-absolutely-blooming-parfjumernaja-voda-edp-100-ml-100872090/?c=750000000',
      rating: 5,
      likes: 0,
      commentsNumber: 12,
      commentsLink: 'https://kaspi.kz/shop/p/dior-miss-dior-absolutely-blooming-parfjumernaja-voda-edp-100-ml-100872090/?c=750000000&tab=reviews'
      }]},
      {
        id: 2,
        name: 'Bags',
        products: [
          {
            id: 201,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h37/hfe/86595997859870.jpg?format=gallery-medium',
            name: 'Сумка тоут Coach MB06155MP',
            description: 'Featuring a spacious interior and sturdy handles, it seamlessly blends elegance with everyday practicality. Perfect for work or casual outings, this timeless tote adds a touch of sophistication to any look.',
            price: 170000,
            link: 'https://kaspi.kz/shop/p/sumka-tout-coach-mb06155mp-natural-naja-kozha-chernyi-121698825/?c=750000000',
            rating: 0,
            likes: 0,
            commentsNumber: 0,
            commentsLink: 'https://kaspi.kz/shop/p/sumka-tout-coach-mb06155mp-natural-naja-kozha-chernyi-121698825/?c=750000000&tab=reviews'
          },
          {
            id: 202,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h3d/haa/68988341616670.jpg?format=gallery-medium',
            name: 'Сумка тоут Huiweitu искусственная кожа черный',
            description: 'Tote bag crafted from eco leather in an elegant brown shade. Spacious, stylish, and perfect for any occasion.',
            price: 6989,
            link: 'https://kaspi.kz/shop/p/sumka-tout-huiweitu-lu848-iskusstvennaja-kozha-chernyi-108889318/?c=750000000',
            rating: 5,
            likes: 0,
            commentsNumber: 824,
            commentsLink: 'https://kaspi.kz/shop/p/sumka-tout-huiweitu-lu848-iskusstvennaja-kozha-chernyi-108889318/?c=750000000&tab=reviews'
          },
          {
            id: 203,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/p01/p76/19191158.jpg?format=gallery-medium',
            name: 'Сумка тоут FURLA натуральная кожа черный',
            description: 'Elegant FURLA tote bag made from genuine black leather. A timeless and versatile accessory for any occasion.',
            price: 331900,
            link: 'https://kaspi.kz/shop/p/sumka-tout-furla-wb01579-bx3323-o6000-1002-natural-naja-kozha-chernyi-133166337/?c=750000000',
            rating: 0,
            likes: 0,
            commentsNumber: 0,
            commentsLink: 'https://kaspi.kz/shop/p/sumka-tout-furla-wb01579-bx3323-o6000-1002-natural-naja-kozha-chernyi-133166337/?c=750000000&tab=reviews'
          },
          {
            id: 204,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h54/h44/80606188929054.jpg?format=gallery-medium',
            name: 'Сумка тоут Campo Marzio искусственная кожа оранжевый, зеленый',
            description: 'Vibrant Campo Marzio tote bag in orange and green, made from high-quality faux leather. Stylish, spacious, and perfect for everyday use.',
            price: 16950,
            link: 'https://kaspi.kz/shop/p/sumka-tout-campo-marzio-2000000000406-iskusstvennaja-kozha-oranzhevyi-zelenyi-110187818/?c=750000000',
            rating: 5,
            likes: 0,
            commentsNumber: 7,
            commentsLink: 'https://kaspi.kz/shop/p/sumka-tout-campo-marzio-2000000000406-iskusstvennaja-kozha-oranzhevyi-zelenyi-110187818/?c=750000000&tab=reviews'
          },
          {
            id: 205,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/h6b/82357258158110.jpg?format=gallery-medium',
            name: 'Сумка тоут Campo Marzio искусственная кожа оранжевый, зеленый',
            description: 'Chic Leather Country shopper bag in beige, crafted from genuine leather. Spacious, durable, and perfect for everyday use.',
            price: 40498,
            link: 'https://kaspi.kz/shop/p/sumka-shopper-leather-country-3594065-natural-naja-kozha-bezhevyi-112195211/?c=750000000',
            rating: 5,
            likes: 0,
            commentsNumber: 14,
            commentsLink: 'https://kaspi.kz/shop/p/sumka-shopper-leather-country-3594065-natural-naja-kozha-bezhevyi-112195211/?c=750000000&tab=reviews'
          },
        ]
      },
      {
        id: 3,
        name: 'Furniture',
        products: [
          {
            id: 301,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/pdd/p2b/3187771.jpg?format=gallery-medium',
            name: 'Стул C06, 80x46x40 см, белый',
            description: 'Minimalist C06 stool in white, measuring 80x46x40 cm. Stylish, sturdy, and perfect for any space.',
            price: 4992,
            link: 'https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000',
            rating: 5,
            likes: 0,
            commentsNumber: 1236,
            commentsLink: 'https://kaspi.kz/shop/p/stul-c06-80x46x40-sm-belyi-100189414/?c=750000000&tab=reviews'
          },
          {
            id: 302,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h5a/ha0/69139263815710.jpg?format=gallery-medium',
            name: 'Комод пластиковый Альтернатива М8760 56х100х39 см',
            description: 'Compact and durable plastic chest of drawers Альтернатива М8760, 56x100x39 cm. Lightweight, practical, and perfect for storage.',
            price: 15900,
            link: 'https://kaspi.kz/shop/p/komod-plastikovyi-al-ternativa-m8760-56h100h39-sm-108948386/?c=750000000',
            rating: 5,
            likes: 0,
            commentsNumber: 239,
            commentsLink: 'https://kaspi.kz/shop/p/komod-plastikovyi-al-ternativa-m8760-56h100h39-sm-108948386/?c=750000000&tab=reviews'
          },
          {
            id: 303,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h1a/h08/86051600597022.jpg?format=gallery-medium',
            name: 'Компьютерное кресло mebel4you 110, белый, темно-серый',
            description: 'Ergonomic Mebel4You 110 computer chair in white and dark gray. Stylish, comfortable, and perfect for work or study.',
            price: 54400,
            link: 'https://kaspi.kz/shop/p/komp-juternoe-kreslo-mebel4you-110-belyi-temno-seryi-119374028/?c=750000000',
            rating: 5,
            likes: 0,
            commentsNumber: 75,
            commentsLink: 'https://kaspi.kz/shop/p/komp-juternoe-kreslo-mebel4you-110-belyi-temno-seryi-119374028/?c=750000000&tab=reviews'
          },
          {
            id: 304,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/hc7/h59/67189057028126.jpg?format=gallery-medium',
            name: 'Распашной шкаф Fourdoor с зеркалом, 160x200х47 см, белый',
            description: 'Fourdoor swing wardrobe with mirror, 160x200x47 cm, in white. Spacious, elegant, and perfect for any interior. ',
            price: 83300,
            link: 'https://kaspi.kz/shop/p/raspashnoi-shkaf-fourdoor-s-zerkalom-160x200h47-sm-belyi-108174703/?c=750000000',
            rating: 4.3,
            likes: 0,
            commentsNumber: 133,
            commentsLink: 'https://kaspi.kz/shop/p/raspashnoi-shkaf-fourdoor-s-zerkalom-160x200h47-sm-belyi-108174703/?c=750000000&tab=reviews'
          },
        ]
      },
      {
        id: 4,
        name: 'Gadgets',
        products: [
          {
            id: 401,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
            name: 'Apple iPhone 16 Pro Max 256Gb Black',
            description: 'The flagship iPhone 16 Pro Max has absorbed the best features of a modern gadget. This is the most productive device in the Apple iPhone line with a large display, amazing performance and incredible external ergonomics. The iPhone 16 Pro Max is a real titan in its family.',
            price: 685666,
            link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
            rating: 3.89,
            likes: 0,
            commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-256gb-chernyi-123887732/?c=750000000&tab=reviews',
            commentsNumber: 379
          },
          {
            id: 402,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
            name: 'Apple iPhone 16 Pro Max 256Gb Gold',
            description: 'The flagship iPhone 16 Pro Max has incorporated the best features of a modern gadget. This is the most productive device in the Apple iPhone line with a large display, amazing performance and incredible external ergonomics.',
            price: 652988,
            link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
            rating: 4.58,
            likes: 0,
            commentsNumber: 517,
            commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000&tab=reviews'
          },
          {
            id: 403,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2e/64206204993566.jpg?format=gallery-medium',
            name: 'Apple iPhone 13 128Gb Blue',
            description: 'The Apple iPhone 13 features a 6.1-inch Super Retina XDR display, which boasts incredibly high pixel density—photos, videos, and text look amazingly clear.',
            price: 652988,
            link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000',
            rating: 5.00,
            likes: 0,
            commentsNumber: 1759,
            commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000&tab=reviews'
          },
          {
            id: 404,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h47/87295471124510.png?format=gallery-medium',
            name: 'Apple iPhone 16 128Gb White',
            description: 'Phone 16 – new design, bright colors, powerful processor and fresh iOS 18 with artificial intelligence. This iPhone offers even more possibilities than its predecessors, taking the basic model to another level: better, more interesting, more convenient.',
            price: 418062,
            link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=750000000',
            rating: 5.00,
            likes: 0,
            commentsNumber: 133,
            commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=750000000&tab=reviews'
          },
          {
            id: 405,
            image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/hc6/87295487770654.png?format=gallery-medium',
            name: 'Apple iPhone 16 128Gb Silver',
            description: 'Phone 16 – new design, bright colors, powerful processor and fresh iOS 18 with artificial intelligence. This iPhone offers even more possibilities than its predecessors, taking the basic model to another level: better, more interesting, more convenient.',
            price: 567502,
            link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-serebristyi-123889795/?c=750000000',
            rating: 5.00,
            likes: 0,
            commentsNumber: 134,
            commentsLink: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-128gb-serebristyi-123889795/?c=750000000'
          },
        ]
        
      }
  ];
  
  selectedCategoryId: number | null = null;

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }

  getSelectedCategory() {
    return this.categories.find((cat) => cat.id === this.selectedCategoryId) || null;
  }
  deleteProduct(productId: number) {
    const category = this.getSelectedCategory();
    if (category) {
      category.products = category.products.filter((p) => p.id !== productId);
    }
  }
  likeProduct(productId: number) {
    const category = this.getSelectedCategory();
    if (category) {
      const product = category.products.find((p) => p.id === productId);
      if (product) {
        product.likes += 1;
      }
    }
  }
}