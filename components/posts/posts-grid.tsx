import React, { useEffect, useState } from "react";
import Pagination from "../pagination";
import Aside from "../aside/aside";
import PostPreview from "./post-preview";
import {
  getBlogPosts,
  getCategories,
  getPostsFromCategory,
} from "../../services/post-service";
import {
  PostInterface,
  CategoryInterface,
  DataInterface,
} from "../../models/posts.model";
import Loader from "../ui/Loader";

import { PAGE_COUNT } from "../../config.json";

interface PostsGridProps {
  posts: PostInterface[];
  latestPosts: PostInterface[];
  cats: CategoryInterface[];
}

const PostsGrid: React.FC<PostsGridProps> = ({ cats, posts, latestPosts }) => {
  const [blogPosts, setBlogPosts] = useState<PostInterface[]>(posts);
  const [categories, setCategories] = useState<CategoryInterface[]>(cats);
  const [postCount, setPostCount] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [nextPage, setNextPage] = useState<string>("");
  const [prevPage, setPrevPage] = useState<string>("");

  useEffect(() => {
    const getPostData = async () => {
      const { data: posts }: DataInterface = await getBlogPosts(1);
      const { data: cats } = await getCategories();

      setBlogPosts(posts.results);
      setPostCount(posts.count);
      setNextPage(posts.next);
      setPrevPage(posts.previous);
      setCategories(cats);
    };
    getPostData();
  }, []);

  let postsGrid: any = <Loader />;
  let pages = postCount / PAGE_COUNT;

  const handlePageClick = async (page: number) => {
    const { data: posts } = await getBlogPosts(page);
    setBlogPosts(posts.results);
    setPostCount(posts.count);
    setNextPage(posts.next);
    setPrevPage(posts.previous);
    setPageNumber(page);
  };

  const handleCategoryClick = async (cat: string) => {
    const { data: posts } = await getPostsFromCategory(cat);

    setBlogPosts(posts.results);
    setPostCount(posts.count);
    setNextPage(posts.next);
    setPrevPage(posts.previous);
    setPageNumber(1);
  };

  const handleNextPrevPageClick = (page: number) => {
    if (nextPage) {
      return handlePageClick(page + 1);
    }
    if (prevPage) {
      return handlePageClick(page - 1);
    }
  };

  if (Object.values(blogPosts).length != 0) {
    postsGrid = blogPosts.map((item) => (
      <PostPreview
        post={item}
        key={item.slug}
        handleClick={handleCategoryClick}
      />
    ));
  }

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <main className="col-12 col-xl-9 col-lg-8 right-sidebar md-margin-60px-bottom sm-margin-40px-bottom">
            {postsGrid}
            <Pagination
              pages={pages}
              postCount={postCount}
              nextPage={nextPage}
              prevPage={prevPage}
              handlePageClick={handlePageClick}
              prevNextPageClick={handleNextPrevPageClick}
              pageNum={pageNumber}
            />
          </main>
          <Aside
            posts={latestPosts}
            categories={categories}
            handleCategoryClick={handleCategoryClick}
          />
        </div>
      </div>
    </section>
  );
};

export default PostsGrid;
