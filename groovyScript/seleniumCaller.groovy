@Grab(group='org.seleniumhq.selenium', module='selenium-java', version='2.5.0')

import org.openqa.selenium.firefox.FirefoxProfile
import org.openqa.selenium.firefox.FirefoxDriver
import org.openqa.selenium.By
import java.util.concurrent.TimeUnit
import org.openqa.selenium.interactions.Actions

def profile = new FirefoxProfile()

try{
profile.addExtension(new File("/Users/Thoughtworks/git/triggered-save-complete/target/triggered-page-saver-1.0.xpi"))

def driver = new FirefoxDriver(profile)

driver.get "http://www.google.com"

driver.get "http://www.uol.com.br"

driver.get "http://www.msn.com"

driver.get "http://www.att.com"

driver.get "http://www.southwest.com"

} catch(Exception e){
print(e)
}



