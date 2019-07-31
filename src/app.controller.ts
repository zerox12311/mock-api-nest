import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('books')
  getBooks() {
    return this.appService.getBooks();
  }

  @Get('authors')
  getAuthors() {
    return this.appService.getAuthors();
  }

  @Get('book/:id')
  getBook(@Param('id') id: string) {
    return this.appService.getBook(+id);
  }

  @Get('author/:id')
  getAuthor(@Param('id') id: string) {
    return this.appService.getAuthor(+id);
  }

  @Get('books-slow')
  getBookSlow() {
    return of(this.appService.getBooks()).pipe(
      delay(1500),
    );
  }

}
