import { NgtColorPipeModule, NgtCoreModule } from '@angular-three/core';
import { NgtAmbientLightModule, NgtPointLightModule } from '@angular-three/core/lights';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtSobaLoaderModule } from '@angular-three/soba/loaders';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';

import { FilterProductsPipe } from './filter-products.pipe';
import { CutSentencesPipe } from './cut-sentences.pipe';
import { CheckOutComponent } from './check-out/check-out.component';
import { SmallCupPreviewComponent } from './small-cup-preview/small-cup-preview.component';
import { HuaweiCoverPreviewComponent } from './huawei-cover-preview/huawei-cover-preview.component';
import { IphoneCoverPreviewComponent } from './iphone-cover-preview/iphone-cover-preview.component';
import { LaptopPreviewComponent } from './laptop-preview/laptop-preview.component';
import { CartCutSentencesPipe } from './cart-cut-sentences.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductPreviewComponent,
    HomeComponent,
    LogInComponent,
    SignUpComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProductsComponent,
    PageNotFoundComponent,
    CartComponent,
    FilterProductsPipe,
    CutSentencesPipe,
    CheckOutComponent,
    SmallCupPreviewComponent,
    HuaweiCoverPreviewComponent,
    IphoneCoverPreviewComponent,
    LaptopPreviewComponent,
    CartCutSentencesPipe
  ],
  imports: [
    BrowserModule,
    NgtCoreModule,
    NgtSobaLoaderModule,
    NgtPrimitiveModule,
    NgtSobaOrbitControlsModule,
    NgtAmbientLightModule,
    NgtPointLightModule,
    NgtColorPipeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
