require 'mandrill'

class Email 
  attr_accessor :subject, :from_name, :text, :to, :html, :from_email

  def initialize
    @mandrill = Mandrill::API.new
  end

  def contact_email(params)
    message = {  
      :subject => "Portfolio Contact",  
      :from_name => params[:name],  
      :text => params[:body] + " " + params[:email],  
      :to => [  
        {  
          :email => "aphuong85@gmail.com",  
          :name => "Anh LaRusso"  
        }  
      ], 
      :html => "<p>#{params[:body]}</p> <br> <p>#{params[:email]}</p>",  
      :from_email => "aphuong85@gmail.com" 
    }
    
    send(message)  
  end

  def send(message)
    @mandrill.messages.send message  
  end
end 
 