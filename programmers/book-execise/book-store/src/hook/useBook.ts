import {useEffect, useState} from "react";
import {BookDetail, BookReviewItem, BookReviewItemWrite} from "../models/book.model";
import {fetchBook, likeBook, unlikeBook} from "../api/books.api";
import {useAuthStore} from "../store/AuthStore";
import {useAlert} from "./useAlert";
import {addCart} from "../api/cart.api";
import {addBookReview, fetchBookReview} from "../api/review.api";
import {useToast} from "./useToast";

export const useBook = (bookId: string | undefined) => {
    const [book, setBook] = useState<BookDetail | null>(null)
    const [cartAdded, setCartAdded] = useState(false)
    const [reviews, setReviews] = useState<BookReviewItem[]>([])

    const {isLoggedIn} = useAuthStore();
    const {showAlert} = useAlert();

    const {showToast} = useToast();

    const likeToggle = () => {
        if (!isLoggedIn) {
            showAlert('로그인이 필요합니다.')
            return;
        }

        if (!book) return;

        if (book.liked) {
            unlikeBook(book.id).then(() => {
                setBook({
                    ...book,
                    liked: false,
                    likes: book.likes - 1,
                })
                showToast("좋아요가 취소되었습니다.")
            })
        } else {
            likeBook(book.id).then(() => {
                setBook({
                    ...book,
                    liked: true,
                    likes: book.likes + 1,
                });
                showToast("좋아요가 성공되었습니다.")
            });
        }
    }

    const addToCart = (quantity: number) => {
        if (!book) return

        addCart({bookId: book.id, quantity: quantity}).then(() => {
            showAlert("장바구니에 추가되었습니다.")
            setCartAdded(true)
            setTimeout(() => {
                setCartAdded(false)
            }, 3000)
        })

        showToast("장바구니에 추가되었습니다.")
    }

    useEffect(() => {
        if (!bookId) {
            return
        }

        fetchBook(bookId).then((book) => {
            setBook(book);
        });

        fetchBookReview(bookId).then((reviews) => {
            setReviews(reviews)
        })

    }, [bookId])

    const addReview = (data: BookReviewItemWrite) => {
        if (!book) return;

        addBookReview(book.id.toString(), data).then((res) => {
            showAlert(res?.message)
        })
    }

    return {book, likeToggle, addToCart, cartAdded, reviews, addReview};
}
