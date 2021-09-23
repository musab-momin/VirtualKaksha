package com.vkaksha.exceptions;



public class EmailNotAvailable extends RuntimeException
{
    public EmailNotAvailable(String mssg)
    {
        super(mssg);
    }

}
