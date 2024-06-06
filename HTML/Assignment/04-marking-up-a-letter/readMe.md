## Block/structural semantics

<dl>
<dt>You should structure the overall document with an appropriate structure including doctype, and &lt;html&gt;, &lt;head&gt; and &lt;body&gt; elements</dt>
<dd>You need to:
<ul>
  <li>Provide an HTML5 doctype (&lt;!doctype html&gt;)</li>
  <li>Include a &lt;head&gt; element just below that</li>
  <li>Wrap the content in a &lt;body&gt; element</li>
  <li>Wrap head and body in an &lt;html&gt; element</li>
  <li>You get one bonus mark for including a lang attribute in the &lt;html&gt; tag</li>
</ul>
</dd>
<dt>The letter in general should be marked up with a structure of paragraphs and headings, with the exception of the below points. There is one top level heading (the "Re:" line) and two second level headings</dt>
<dd>You need to:
  <ul>
  <li>Mark up the "Re:" line as an &lt;h1&gt; element</li>
  <li>Mark up the "Starting dates", "Subjects of study" and "Exotic dance moves" as &lt;h2&gt; elements</li>
  <li>Mark up all appropriate structural elements that shouldn't be headings or lists as paragraphs</li>
</ul>
</dd>
<dt>The semester start dates, study subjects and exotic dances should be marked up using an appropriate list type</dt>
<dd>This is fairly simple. Looking at the different lists and their context/usage, you should know to:
<ul>
  <li>Mark up the semester start dates as an unordered list (&lt;ul&gt;/&lt;li&gt;), or arguably an ordered list (&lt;ol&gt;/&lt;li&gt;) — either is ok</li>
  <li>Mark up the study subjects as an ordered list (&lt;ol&gt;/&lt;li&gt;)</li>
  <li>Mark up the exotic dances as a description list (&lt;dl&gt;/&lt;dd&gt;/&lt;dt&gt;)</li>
</ul>
</dd>
<dt>The two addresses should be put inside <code>&lt;address&gt;</code> elements. Each line of the address should sit on a new line, but not be in a new paragraph.</dt>
<dd>Wrap both of the addresses in an &lt;address&gt; element, and put a &lt;br&gt; element at the end of each line of the address, except for the last line in each case.</dd>
</dl>

## Inline semantics

<dl>
<dt>The names of the sender and receiver (and "Tel" and "Email") should be marked up with strong importance</dt>
<dd>"Dr. Eleanor Gaye", "Miss Eileen Dover", "Tel", and "Email" should be wrapped in a &lt;strong&gt; element.</dd>
<dt>The four dates in the document should be given appropriate elements containing machine-readable dates</dt>
<dd>All four dates should be marked up using a &lt;time&gt; element. Each one should have a datetime attribute containing a machine readable date. For example &lt;time datetime="2016-01-20"&gt;20 January 2016&lt;/time&gt;</dd>
<dt>The first address and first date in the letter should be given a class attribute value of "sender-column"; the CSS you'll add later will then cause these to be right aligned, as should be the case in a classic letter layout.</dt>
<dd>The first &lt;p&gt; element in the document should be given an attribute of class="sender-column"; the first date should be wrapped in a &lt;p&gt;, which should also be given the class="sender-column" attribute.</dd>
<dt>The five acronyms/abbreviations in the main text of the letter should be marked up to provide expansions of each acronym/abbreviation.</dt>
<dd>Each acronym/abbreviation in the main text of the letter — "PhD", "HTML", "CSS", "BC" and "Esq" — should be wrapped in an &lt;abbr&gt; element with a title attribute, for example &lt;abbr title="Cascading Style Sheets"&gt;CSS&lt;/abbr&gt;</dd>
<dt>The six sub/superscripts should be marked up appropriately (3 marks, half a mark each).</dt>
<dd>The four numbers in the chemical formulae should be wrapped in a &lt;sub&gt; element, e.g. H&lt;sub&gt;2&lt;/sub&gt;O. The rightmost number in both exponential expressions should be wrapped in a &lt;sup&gt; element, e.g. 10&lt;sup&gt;3&lt;/sup&gt;.</dd>
<dt>Try to mark up at least two appropriate words in the text with strong importance/emphasis</dt>
<dd>This is very open to interpretation; anything that seems appropriate should be fine.</dd>
<dt>There are two places where a hyperlink should be added; add appropriate links with titles. For the location that the links point to, just use http://example.com</dt>
<dd>
  The two places should have an &lt;a&gt; element wrapped around reasonable words to make the link. Each element should have an href attribute pointing to a dummy URL, such as "http://www.example.com" or "*", and a title attribute that describes what the link should point to. Half a mark should be taken off if the link text is inappropriate, and/or attributes are missing.
  <ul>
    <li>First instance: something like &lt;a href="http://www.example.com" title="table of awesome university important dates"&gt;important university dates&lt;/a&gt;</li>
    <li>Second instance: something like &lt;a href="http://www.example.com" title="Dr Gaye's exotic dance research"&gt;exotic dance research page&lt;/a&gt;</li>
  </ul>
</dd>
<dt>The university motto quote and citation should be marked up with appropriate elements</dt>
<dd>"Be excellent to each other" should be wrapped in a &lt;q&gt; element, and "The memoirs of Bill S Preston, Esq" should be wrapped in a &lt;cite&gt; element</dd>
</dl>

## The head of the document

<dl>
  <dt>The character set of the document should be specified as utf-8 using an appropriate meta tag</dt>
  <dd>The answer should be &lt;meta charset="utf-8"&gt; or equivalent, included inside the &lt;head&gt; element.</dd>
  <dt>The author of the letter should be specified in an appropriate meta tag</dt>
  <dd>The answer should be something like &lt;meta name="author" content="Dr. Eleanor Gaye"&gt;, included inside the &lt;head&gt; element.</dd>
  <dt>The provided CSS should be included inside an appropriate tag </dt>
  <dd>The CSS from the provided CSS file should be pasted inside a &lt;style&gt; element, included inside the &lt;head&gt; element. OR, it would also be acceptable (in fact better) if you put the CSS inside an external CSS file and linked it via a &lt;link&gt; element.</dd>
</dl>