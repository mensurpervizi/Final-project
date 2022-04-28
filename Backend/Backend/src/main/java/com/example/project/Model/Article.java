package com.example.project.Model;

public class Article {
    
    private Integer id;
    private String title;
    private String author;
    private String genre;
    private String type;
    private Boolean availability;
    private String date;
    private String dueDate;
    private String src;

    public Article(Integer id, String title, String author, String genre, String type, Boolean availability, String date, String dueDate, String src) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.type = type;
        this.availability = availability;
        this.date = date;
        this.dueDate = dueDate;
        this.src = src;
    }

    public String getSrc() {
        return src;
    }

    public void setSrc(String src) {
        this.src = src;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Boolean getAvailability() {
        return availability;
    }

    public void setAvailability(Boolean availability) {
        this.availability = availability;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}