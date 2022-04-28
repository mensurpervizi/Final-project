package com.example.project.Service;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Collection;

import com.example.project.Model.Article;

public interface ArticleService {
    public abstract void createArticle(Article article);
    public abstract void updateArticle(Integer id, Article article);
    public abstract void deleteArticle(Integer id);
    public abstract Collection<Article> getArticles() throws FileNotFoundException, IOException;
    // public abstract Collection<Article> getAvailableArticles() throws FileNotFoundException, IOException;
    public abstract Object getSingleArticle(Integer id);
    public abstract Collection<Article> getFilteredArticles(String filterType, String filter);
    // public abstract Collection<Article> getFilteredAvailableArticles(String filterType, String filter);
}
