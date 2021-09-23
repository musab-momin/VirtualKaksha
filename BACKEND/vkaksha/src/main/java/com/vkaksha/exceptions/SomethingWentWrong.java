package com.vkaksha.exceptions;

public class SomethingWentWrong extends RuntimeException
{
    public SomethingWentWrong(String mssg)
    {
        super(mssg);
    }

}
