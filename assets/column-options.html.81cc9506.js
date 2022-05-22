import{_ as l,r as e,o as i,c as r,b as n,a as t,w as c,F as u,d as a,e as s}from"./app.f00b8de7.js";const d={},v=a(`<h1 id="column-options" tabindex="-1"><a class="header-anchor" href="#column-options" aria-hidden="true">#</a> Column Options</h1><p>Each column objects can contain the following configuration options:</p><h2 id="label" tabindex="-1"><a class="header-anchor" href="#label" aria-hidden="true">#</a> label</h2><p>type <code>String</code></p><p>Text to put on column header.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="field" tabindex="-1"><a class="header-anchor" href="#field" aria-hidden="true">#</a> field</h2><p>type <code>String</code></p><p>Row object property that this column corresponds to. This can be:</p><ul><li>String <code>eg: &#39;name&#39;</code> - simple row property name</li><li>String <code>eg: &#39;location.lat&#39;</code>- nested row property name. lets say if the row had a property &#39;location&#39; which was an object containing &#39;lat&#39; and &#39;lon&#39;</li><li>Function - a function that returns a value to be displayed based on the row object</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fealdFn<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
<span class="token comment">// in methods</span>
<span class="token function">fieldFn</span><span class="token punctuation">(</span><span class="token parameter">rowObj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> rowObj<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h2><p>type <code>String</code></p><p>type of column. default: &#39;text&#39;. This determines the formatting for the column and filter behavior as well. Possible values:</p><ul><li><em>number</em> - right aligned</li><li><em>decimal</em> - right aligned, 2 decimal places</li><li><em>percentage</em> - expects a decimal like 0.03 and formats it as 3.00%</li><li><em>boolean</em> - right aligned</li><li><em>date</em> - expects a string representation of date eg &#39;20170530&#39;. You should also specify <a href="#dateinputformat">dateInputFormat</a> and <a href="#dateoutputformat">dateOutputFormat</a></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;joined On&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;createdAt&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;date&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">dateInputFormat</span><span class="token operator">:</span> <span class="token string">&#39;yyyy-MM-dd&#39;</span><span class="token punctuation">,</span> <span class="token comment">// expects 2018-03-16</span>
    <span class="token literal-property property">dateOutputFormat</span><span class="token operator">:</span> <span class="token string">&#39;MMM do yyyy&#39;</span><span class="token punctuation">,</span> <span class="token comment">// outputs Mar 16th 2018</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dateinputformat" tabindex="-1"><a class="header-anchor" href="#dateinputformat" aria-hidden="true">#</a> dateInputFormat</h2><p>type <code>String</code></p><p>provide the format to parse date string.</p>`,19),k={class:"custom-container tip"},m=n("p",{class:"custom-container-title"},"TIP",-1),b=s("Vue-good-table uses date-fns for date parsing. "),h={href:"https://date-fns.org/v2.17.0/docs/parse",target:"_blank",rel:"noopener noreferrer"},y=s("Check out their formats here"),g=s("."),f=a(`<h2 id="dateoutputformat" tabindex="-1"><a class="header-anchor" href="#dateoutputformat" aria-hidden="true">#</a> dateOutputFormat</h2><p>type <code>String</code></p><p>provide the format for output date</p><h2 id="sortable" tabindex="-1"><a class="header-anchor" href="#sortable" aria-hidden="true">#</a> sortable</h2><p>type <code>Boolean</code></p><p>enable/disable sorting on columns. This property is higher priority than global sortable property</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;user_name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="firstsorttype" tabindex="-1"><a class="header-anchor" href="#firstsorttype" aria-hidden="true">#</a> firstSortType</h2><p>type <code>String (default: &#39;asc&#39;)</code></p><p>controls the first sort type when sorting by the column. If you want the first sort type for this column to be descending, set this property to &#39;desc&#39;. Possible values:</p><ul><li><em>asc</em> - the initial sort will be ascending</li><li><em>desc</em> - the initial sort will be descending</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;user_name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">firstSortType</span><span class="token operator">:</span> <span class="token string">&#39;desc&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sortfn" tabindex="-1"><a class="header-anchor" href="#sortfn" aria-hidden="true">#</a> sortFn</h2><p>type <code>Function</code></p><p>custom sort function. If you want to supply your own sort function you can use this property.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// in data</span>
<span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sortFn</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>sortFn<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// in methods</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">sortFn</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> col<span class="token punctuation">,</span> rowX<span class="token punctuation">,</span> rowY</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// x - row1 value for column</span>
    <span class="token comment">// y - row2 value for column</span>
    <span class="token comment">// col - column being sorted</span>
    <span class="token comment">// rowX - row object for row1</span>
    <span class="token comment">// rowY - row object for row2</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>x <span class="token operator">&lt;</span> y <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> <span class="token punctuation">(</span>x <span class="token operator">&gt;</span> y <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="formatfn" tabindex="-1"><a class="header-anchor" href="#formatfn" aria-hidden="true">#</a> formatFn</h2><p>type <code>Function</code></p><p>Allows for custom format of values, <code>function(value)</code>, should return the formatted value to display.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// in data</span>
<span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Salary&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;salary&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">formatFn</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>formatFn<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// in methods</span>
<span class="token function-variable function">formatFn</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;$&#39;</span> <span class="token operator">+</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> html</h2><p>type <code>Boolean</code></p><p>indicates whether this column will require html rendering.</p>`,23),j={class:"custom-container tip"},w=n("p",{class:"custom-container-title"},"TIP",-1),_=s("The preferred way of creating columns that have html is by "),x=s("using slots"),F=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// in data</span>
<span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Action&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;btn&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">html</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token literal-property property">rows</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">btn</span><span class="token operator">:</span> <span class="token string">&#39;&lt;button&gt;My Action&lt;/button&gt;&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="width" tabindex="-1"><a class="header-anchor" href="#width" aria-hidden="true">#</a> width</h2><p>type <code>Number</code></p><p>provide a width value for this column</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;user_name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;50px&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hidden" tabindex="-1"><a class="header-anchor" href="#hidden" aria-hidden="true">#</a> hidden</h2><p>type <code>Boolean</code></p><p>hide a column</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;user_name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hidden</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="thclass" tabindex="-1"><a class="header-anchor" href="#thclass" aria-hidden="true">#</a> thClass</h2><p>type <code>String</code></p><p>provide custom class(es) to the table header</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;user_name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">thClass</span><span class="token operator">:</span> <span class="token string">&#39;custom-th-class&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tdclass" tabindex="-1"><a class="header-anchor" href="#tdclass" aria-hidden="true">#</a> tdClass</h2><p>type <code>String</code> or <code>Function</code></p><p>provide custom class(es) to the table cells</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;user_name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tdClass</span><span class="token operator">:</span> <span class="token string">&#39;text-center&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>or</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;user_name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tdClass</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tdClassFunc<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
<span class="token comment">// and later</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">tdClassFunc</span><span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>row<span class="token punctuation">.</span>field <span class="token operator">&gt;</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&#39;red-class&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token string">&#39;green-class&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="globalsearchdisabled" tabindex="-1"><a class="header-anchor" href="#globalsearchdisabled" aria-hidden="true">#</a> globalSearchDisabled</h2><p>type <code>Boolean (default: false)</code></p><p>if true, this column will be ignored by the global search</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;user_name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">globalSearchDisabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tooltip" tabindex="-1"><a class="header-anchor" href="#tooltip" aria-hidden="true">#</a> tooltip</h2><p>type <code>String</code></p><p>Text to put on a simple tooltip for column header.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&#39;user_name&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token string">&#39;A simple tooltip&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function S(C,T){const p=e("ExternalLinkIcon"),o=e("RouterLink");return i(),r(u,null,[v,n("div",k,[m,n("p",null,[b,n("a",h,[y,t(p)]),g])]),f,n("div",j,[w,n("p",null,[_,t(o,{to:"/guide/advanced/#custom-row-template"},{default:c(()=>[x]),_:1})])]),F],64)}var O=l(d,[["render",S],["__file","column-options.html.vue"]]);export{O as default};
